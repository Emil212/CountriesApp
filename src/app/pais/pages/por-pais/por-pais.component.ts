import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  //Es lo que se mostrara en la barra de busqueda
  termino: string = '';

  //Determina si hay error en la peticion
  hayError: boolean = false;

  //Variable que sirve para mostrar en el html el listado de paises
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  //Se hace la inyeccion del servicio
  constructor(private paisService: PaisService) {}

  //Se implementa la funcion que se dispare al buscar en el formulario
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);

        //Se asigna el valorque trae la peticion
        this.paises = paises;
      },
      (err) => {
        console.log('Error');
        console.info(err);
        this.hayError = true;

        //Se pone un arreglo vacio para que se limpien los resultados previos
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0.3)),
      (err) => (this.paisesSugeridos = [])
    );
  }
}
