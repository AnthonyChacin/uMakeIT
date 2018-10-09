import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  public salvar: boolean;

  constructor() {
    this.salvar = false;
  }

  onSalvar(){
    this.salvar = true;
  }

  ngOnInit() {
  }

}
