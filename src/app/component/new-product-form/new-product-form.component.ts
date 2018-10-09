import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent implements OnInit {

  public agregado: boolean;

  constructor() {
    this.agregado = false;
  }

  onAgregar(){
    this.agregado = true;
  }


  ngOnInit() {
  }

}
