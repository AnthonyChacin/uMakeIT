import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {

  public cambioClave: boolean;

  constructor() {
    this.cambioClave = false;
  }

  onCambiarClave(){
    this.cambioClave = true;
  }
  
  ngOnInit() {
  }

}
