import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  //Normalmente los eventos comienzan con "on"
  //Sera eltermino que se va a emitir para que se realice la busqueda
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  //Para agregar la funcionalidad del Debounce Time
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //Para cambiar el placeholder de acuerdo a la busqueda
  @Input() placeholder: string = '';

  termino: string = '';

  debouncer: Subject<string> = new Subject<string>();

  //Se dispara una unica vez cuando el componente es creado
  //debounceTime -> Tiempo en milesimas para que se ejecute el subscribe
  ngOnInit() {
    this.debouncer.pipe(debounceTime(500)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  //Emite el termino
  //Se tiene que emitir en el componente por pais
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    //El metodo next lo usan los subject para emitir datos
    this.debouncer.next(this.termino);
  }
}
