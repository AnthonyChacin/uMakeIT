import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../service/orders/orders.service';
import { PlatesService } from '../../service/plates/plates.service';
import { ProductsService } from '../../service/products/products.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';

@Component({
	selector: 'app-order-summary',
	templateUrl: './order-summary.component.html',
	styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

	private productosComprar = []
	private platesMostrar = []
	public total: number;
	public iva: number;
	public subtotal: number;
	public payPalConfig?: PayPalConfig;

	constructor(
		private ordersService: OrdersService,
		private platesService: PlatesService,
		private productsService: ProductsService
	) { }

	ngOnInit() {

		this.ordersService.getOrders().subscribe((orderSnapshot => {

			this.productosComprar = []
			this.platesMostrar = []
			this.iva = 0
			this.total = 0
			this.subtotal = 0

			orderSnapshot.forEach((dataOrder: any) => {

				if (dataOrder.payload.doc.data().reference_user === firebase.auth().currentUser.email && dataOrder.payload.doc.data().actual) {

					dataOrder.payload.doc.data().plates_references.forEach(plates => {
						this.platesService.getPlate(plates).snapshotChanges().subscribe(dataPlates => {
							var precioPorPlato = 0
							dataPlates.payload.get('products_plate').forEach(productsPlate => {
								this.productsService.getProduct(productsPlate.id).snapshotChanges().subscribe(platoSecundario => {
	  							/*this.productosComprar.push({
			  						name: platoSecundario.payload.get('name'),
			  						price: platoSecundario.payload.get('price')*productsPlate.cant
			  					})*/
									this.subtotal += platoSecundario.payload.get('price') * productsPlate.cant
									precioPorPlato += platoSecundario.payload.get('price') * productsPlate.cant
								})
							})

							this.productsService.getProduct(dataPlates.payload.get('reference_plate')).snapshotChanges().subscribe(platoPrincipal => {

								precioPorPlato += platoPrincipal.payload.get('price') * dataPlates.payload.get('cant_plate')
								this.productosComprar.push({
									name: platoPrincipal.payload.get('name'),
									price: precioPorPlato
								})

								this.subtotal += platoPrincipal.payload.get('price') * dataPlates.payload.get('cant_plate')

								this.iva = (this.subtotal * 0.16)
								this.total = (this.iva + this.subtotal)
							})

						})

					})
				}
			})
			console.log(this.platesMostrar)
			console.log(this.productosComprar)
		}))
	}

	initConfig(): void {
		this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
			commit: true,
			client: {
				sandbox: 'AWchik9_2W3vdEYgkB5xb6V4PKBC0x7F4q7li3XYk9xKv8y5pxGg0BLDrTjPWkcwfi4rFD4x7nRBkdoq'
			},
			button: {
				label: 'paypal',
			},
			onPaymentComplete: (data, actions) => {
				console.log('OnPaymentComplete');
			},
			onCancel: (data, actions) => {
				console.log('OnCancel');
			},
			onError: (err) => {
				console.log('OnError');
			},
			transactions: [{
				amount: {
					currency: 'USD',
					total: 9
				}
			}]
		});
	}
}




