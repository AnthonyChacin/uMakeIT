import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	public products = [];

  constructor(private productsService: ProductsService) {
   }

  ngOnInit() {
  	this.productsService.getProducts().subscribe((productSnapshot) => {
        this.products = [];
        
        productSnapshot.forEach((productData: any) => {
        firebase.firestore().collection('/products/').doc(productData.payload.doc.id).onSnapshot((data) => {
          if (data.get('plato') === 'Principal') {
          	if(data.get('available') === 'Disponible'){
          		this.products.push({
	              id: productData.payload.doc.id,
	              data: productData.payload.doc.data()
	            })
          	}
          }
        })
      })
    })
  }

}
