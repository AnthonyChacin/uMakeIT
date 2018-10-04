import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit {

  public mostrarLogin:boolean;
  public mostrarRegistro:boolean;

  constructor() { 
    this.mostrarLogin = true;
    this.mostrarRegistro = false;
  }
  onShowHideRegistro(){
    this.mostrarLogin = false;
    this.mostrarRegistro = true;
  }
  onShowHideLogin(){
    this.mostrarLogin = true;
    this.mostrarRegistro = false;
  }

  ngOnInit() {
  }

}
