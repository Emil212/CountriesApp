import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent implements OnInit {
  //El input es un decorador que permite recibir datos en un componente
  @Input() paises: Country[] = [];

  constructor() {}

  ngOnInit(): void {}
}
