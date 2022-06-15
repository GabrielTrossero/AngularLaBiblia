import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  titulos: string[];

  constructor() {
    this.titulos = ["Spiderman", "Ironman", "Capitan America"];
  }
}
