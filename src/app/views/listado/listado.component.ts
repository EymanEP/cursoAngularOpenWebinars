import { Component } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/Entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public listadoEntradas: any;

  constructor(private entradaService: EntradaService) {

  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }

  private recuperarEntradas(): void {
    this.entradaService.recuperarEntradas().subscribe(
      (data) => {
        this.listadoEntradas = data;
      },
      (error) => {

      },
      () => {

      }
    )
  }

  public mostrarTitulo(title: any): void {
    alert(`Entrada seleccionada: ${ title }.`)
  }
}
