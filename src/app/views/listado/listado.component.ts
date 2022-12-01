import { Component } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/Entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public listadoEntradas: Entrada[];

  constructor() {
    this.listadoEntradas = [
      {
        titulo: 'Introduccion a Angular',
        resumen: "En esta lección realizaremos una pequeña introducción a Angular"
      },
      {
        titulo: 'Typescript como lenguaje para Angular',
        resumen: "Breve recorrido del lenguaje TypeScript para Angular"
      },
      {
        titulo: 'Componentes Angular',
        resumen: "Aprenderemos a usar los componentes en Angular"
      }
    ]
  }

  public mostrarTitulo(titulo: String): void {
    alert(`Entrada seleecionada: ${ titulo }.`)
  }
}
