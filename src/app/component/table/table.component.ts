import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import * as firebase from 'angularfire2';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public products: Observable<Product[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

}
