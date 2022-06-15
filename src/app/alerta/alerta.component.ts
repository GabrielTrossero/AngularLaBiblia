import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  //@Input() mensaje: string; //Acá utilizamos la propiedad "mensaje" directamente
  @Input('texto') mensaje: string;
  @Input() subTitulo: string;

  constructor() { 
    this.mensaje = "Mensaje por defecto";
    this.subTitulo = "Subtitulo por defecto";
  }

  ngOnInit(): void {
  }

}
