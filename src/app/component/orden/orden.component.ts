import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../service/orders/orders.service';
import { PlatesService } from '../../service/plates/plates.service';
import { ProductsService } from '../../service/products/products.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

	public orders = [];

  constructor(
  	private ordersService: OrdersService,
  	private platesService: PlatesService,
  	private productsService: ProductsService,
  	private router: Router
  	) { }


  onShowProductCustomization(name: String) {
    this.router.navigate([`/product-customization/${name}`]);
  }

  eliminarPlato(idPlate: string){
  	this.ordersService.getOrders().subscribe((orderSnapshot) => {
  		orderSnapshot.forEach((orderData: any) => {
  			if(orderData.payload.doc.data().reference_user === firebase.auth().currentUser.email && orderData.payload.doc.data().actual) {
        		
        		const arrayPlates = orderData.payload.doc.data().plates_references;
	        	for(let i = 0; i < arrayPlates.length; i++){
	        		if(arrayPlates[i] === idPlate){
	        			this.ordersService.getOrder(orderData.payload.doc.id).update({
	        				plates_references: firebase.firestore.FieldValue.arrayRemove(idPlate)
	        			})

	        			this.platesService.deletePlate(idPlate).then(res => {
	        				alert("¡Plato eliminado exitosamente!");
	        			})
	        		}
	        	}
        	}
  		})
  	})
  }
  
  ngOnInit() {
  	this.ordersService.getOrders().subscribe((orderSnapshot) => {
      orderSnapshot.forEach((orderData: any) => {
        if(orderData.payload.doc.data().reference_user === firebase.auth().currentUser.email && orderData.payload.doc.data().actual) {
        	const arrayPlates = orderData.payload.doc.data().plates_references;
        	for(let i = 0; i < arrayPlates.length; i++){

        		this.platesService.getPlate(arrayPlates[i]).snapshotChanges().subscribe(dataPlate => {
        			const idProduct = dataPlate.payload.get('reference_plate');
        			this.productsService.getProduct(idProduct).snapshotChanges().subscribe(dataProduct => {
        				this.orders.push({
        					idPlate: dataPlate.payload.id,
        					name: dataProduct.payload.get('name'),
        					url_img: dataProduct.payload.get('url_img'),
        					name_img: dataProduct.payload.get('name_img')
        				})
        			})
        		})
        	}
        }
      })
    })
  }

}
