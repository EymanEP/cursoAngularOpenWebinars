import { Component, Input } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/Entrada';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {
  @Input()
  public entrada!: Entrada;

  constructor() {

  }

  ngOnInit() : void {

  }
}
