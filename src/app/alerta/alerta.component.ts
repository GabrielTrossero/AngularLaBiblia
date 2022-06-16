import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  //@Input() mensaje: string; //Acá utilizamos la propiedad "mensaje" directamente
  @Input('texto') mensaje: string;
  @Input() subTitulo: string;

  //Los Output son emisores de eventos, toman un evento y lo emiten en el punto que queramos
  @Output() alertaPulsada: EventEmitter<string>;

  constructor() { 
    this.mensaje = "Mensaje por defecto";
    this.subTitulo = "Subtitulo por defecto";

    this.alertaPulsada = new EventEmitter() ;
  }

  ngOnInit(): void {
    console.log(this.mensaje);
  }

  onClick() {
    this.alertaPulsada.emit('La alerta ha sido pulsada');
  }

}
