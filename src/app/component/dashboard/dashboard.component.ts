import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  public mostrar: boolean;

  constructor() {
    this.mostrar = false;
   }

   onShowHideCompras(){
     this.mostrar = true;
   }


  ngOnInit() {
  }

}
