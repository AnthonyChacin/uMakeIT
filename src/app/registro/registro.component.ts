import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public mostrarDashboard:boolean;

  constructor() { 
    this.mostrarDashboard=false;
  }

  onShowHideRegistrar(){
    this.mostrarDashboard=true;
  }

  ngOnInit() {
  }

}
