import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../service/orders/orders.service';
import { PlatesService } from '../../service/plates/plates.service';
import { ProductsService } from '../../service/products/products.service';
import { Observable } from 'rxjs';

import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-orders-list',
  templateUrl: './pending-orders-list.component.html',
  styleUrls: ['./pending-orders-list.component.css']
})
export class PendingOrdersListComponent implements OnInit {

	public orders = [];

  constructor(
  	private ordersService: OrdersService,
  	private platesService: PlatesService,
  	private productsService: ProductsService,
  	private router: Router
  ) { }

  ngOnInit() {
  	this.ordersService.getOrders().subscribe( orderSnapshot => {
  		this.orders = []
  		orderSnapshot.forEach( dataOrder => {
  			this
  		})
  	})
  }

}
