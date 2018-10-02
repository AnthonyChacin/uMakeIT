import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  
  public mostrarCompras:boolean;

  constructor() {
    this.mostrarCompras = true;
   }

   onHideCompras(){
     this.mostrarCompras = false;
   }
   

  ngOnInit() {
  }

}
