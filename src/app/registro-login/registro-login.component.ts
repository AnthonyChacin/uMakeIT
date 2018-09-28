import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit {

  public mostrarLogin:boolean;
  public mostrarRegistrar:boolean;

  constructor() { 
    this.mostrarLogin = true;
    this.mostrarRegistrar = false;
  }

  onShowHideRegistrar(){
    this.mostrarLogin = false;
    this.mostrarRegistrar = true;
  }
  onShowHideLogin(){
    this.mostrarLogin = true;
    this.mostrarRegistrar = false;
  }
  

  ngOnInit() {
  }

}
