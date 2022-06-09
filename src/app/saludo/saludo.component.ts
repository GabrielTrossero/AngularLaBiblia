import { Component, OnInit } from '@angular/core';

@Component({ //decorador que permite que la calse de abajo se convierta en un componente
  selector: 'app-saludo', //propiedad que nos permite utilizar el componente en cualquier parte
  //template: '<h1>Componente Saludo</h1>', //si no queremos llamar a un componente lo podemos poner directamente así
  templateUrl: './saludo.component.html',
  /*styles: [ //si no queremos llamar a un componente lo podemos poner directamente así
    `h1 {
      color: red;
      }`
  ]*/
  styleUrls: ['./saludo.component.css']

})
export class SaludoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
