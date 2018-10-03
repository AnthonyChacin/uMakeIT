import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit {

  public mostrarLogin:boolean;
  public mostrarRegistro:boolean;
  public mostrarDashboard: boolean;

  constructor() { 
    this.mostrarLogin = true;
    this.mostrarRegistro = false;
    this.mostrarDashboard = false;
  }
  onShowHideRegistro(){
    this.mostrarLogin = false;
    this.mostrarRegistro = true;
  }
  onShowHideLogin(){
    this.mostrarLogin = true;
    this.mostrarRegistro = false;
  }
  onShowHideRegistrar(){
    this.mostrarDashboard = true;
    this.mostrarRegistro = false;
    this.mostrarLogin = false;
  }
  onShowHideIniciarSesion(){
    this.mostrarDashboard = true;
    this.mostrarRegistro = false;
    this.mostrarLogin = false;
  }

  ngOnInit() {
  }

}
