import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  public mostrarCompras: boolean;

  constructor() {
    this.mostrarCompras = false;
   }

   onShowHideCompras(){
     this.mostrarCompras = true;
   }

  ngOnInit() {
  }

}
