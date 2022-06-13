import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje: string;

  constructor() { 
    this.mensaje = 'Hola';
  }

  ngOnInit(): void {
  }

  onClick($event) {
    console.log("Boton pulsado");
    console.log($event);
  }

  onChange($event) {
    console.log($event.target.value);
  }

  onMouseEnter() {
    this.mensaje = "Estoy dentro del div";
  }

  onMouseOut() {
    this.mensaje = "Estoy fuera del div";
  }

  onInput($event) {
    console.log($event.target.value);
    this.mensaje = $event.target.value;
  }

}
