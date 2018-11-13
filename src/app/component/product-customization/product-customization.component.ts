import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import * as firebase from 'firebase';
import { Product } from '../../models/product';
import { Plate } from '../../models/plate';
import { Order } from '../../models/order';
import { OrdersService } from 'src/app/service/orders/orders.service';
import { PlatesService } from 'src/app/service/plates/plates.service';

@Component({
  selector: 'app-product-customization',
  templateUrl: './product-customization.component.html',
  styleUrls: ['./product-customization.component.css']
})
export class ProductCustomizationComponent implements OnInit {
  @Input() name: String;
  public product = {} as Product;
  public plate = {} as Plate;
  public order = {} as Order;
  public racion = {} as Plate;
  public aderezo = {} as Plate;
  public jugo = {} as Plate;
  public postre = {} as Plate;
  public raciones = [];
  public aderezos = [];
  public jugos = [];
  public postres = [];
  public productID: any;
  public plato = [];
  public orden = [];
  public references_plates = [];

  constructor(private productsService: ProductsService, private ordersService: OrdersService, private platesService: PlatesService) { }

  agregarPlato() {

    if (this.name != "" && this.plate.cant != null) {
      this.productsService.getProducts().subscribe((productSnapshot) => {
        productSnapshot.forEach((productData: any) => {
          if (productData.payload.doc.data().name === this.name) {
            const reference = productData.payload.doc.id;
            const plato: any = {
              reference_plate: reference,
              cant_plate: this.plate.cant,
              products_plate: this.plato
            }
            firebase.firestore().collection('/plates/').add(plato).then((res) => {
              //Aquí estoy verificando el id con el console.log
              console.log(res.id);

              this.ordersService.getOrders().subscribe((orderSnapshot) => {
                orderSnapshot.forEach((orderData: any) => {
                  if (orderData.payload.doc.data().reference_user === firebase.auth().currentUser.email && orderData.payload.doc.data().actual) {
                    //Aqui hay que hacerle push del id del plato que acabo de agregar a la coleccion plates en la linea 46 al arreglo de plates_references de la orden pero necesito el id del plato que acabo de agregar a la coleccion plates en la linea 46 y no se como obtener este id
                    console.log(this.references_plates);
                    this.references_plates = orderData.payload.doc.data().plates_references;
                    this.references_plates.push(res.id);

                    const orden: any = {
                      reference_user: firebase.auth().currentUser.email,
                      actual: true,
                      plates_references: this.references_plates
                    }
                    console.log(this.references_plates);
                    //this.ordersService.updateOrder(orden, orderData.payload.doc.id);
                    
                  }
                })
              })

            });
          }
        })
      })
    }
  }

  agregarRacion() {
    if (this.racion.name != "" && this.racion.cant != null) {
      this.productsService.getProducts().subscribe((productSnapshot) => {
        productSnapshot.forEach((productData: any) => {
          if (productData.payload.doc.data().name === this.racion.name) {
            this.plato.push({
              id: productData.payload.doc.id,
              cant: this.racion.cant
            })
            this.racion.cant = null;
            console.log(this.plato);
          }
        })
      })
    }
  }

  agregarAderezo() {
    if (this.aderezo.name != "" && this.aderezo.cant != null) {
      this.productsService.getProducts().subscribe((productSnapshot) => {
        productSnapshot.forEach((productData: any) => {
          if (productData.payload.doc.data().name === this.aderezo.name) {
            this.plato.push({
              id: productData.payload.doc.id,
              cant: this.aderezo.cant
            })
            this.aderezo.cant = null;
            console.log(this.plato);
          }
        })
      })
    }
  }

  agregarJugo() {
    if (this.jugo.name != "" && this.jugo.cant != null) {
      this.productsService.getProducts().subscribe((productSnapshot) => {
        productSnapshot.forEach((productData: any) => {
          if (productData.payload.doc.data().name === this.jugo.name) {
            this.plato.push({
              id: productData.payload.doc.id,
              cant: this.jugo.cant
            })
            this.jugo.cant = null;
            console.log(this.plato);
          }
        })
      })
    }
  }

  agregarPostre() {
    if (this.postre.name != "" && this.postre.cant != null) {
      this.productsService.getProducts().subscribe((productSnapshot) => {
        productSnapshot.forEach((productData: any) => {
          if (productData.payload.doc.data().name === this.postre.name) {
            this.plato.push({
              id: productData.payload.doc.id,
              cant: this.postre.cant
            })
            this.postre.cant = null;
            console.log(this.plato);
          }
        })
      })
    }
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe((productSnapshot) => {
      productSnapshot.forEach((productData: any) => {
        firebase.firestore().collection('/products/').doc(productData.payload.doc.id).onSnapshot((data) => {
          if (data.get('name') === this.name) {
            this.product.name_img = data.get('name_img');
            this.product.name = data.get('name');
            this.product.plato = data.get('plato');
            this.product.price = data.get('price');
            this.product.available = data.get('available');
            this.product.url_img = data.get('url_img');
            this.productID = productData.payload.doc.id;
          }
        })
      })
    })

    this.productsService.getProducts().subscribe((productSnapshot) => {
      productSnapshot.forEach((productData: any) => {
        if (productData.payload.doc.data().plato === "Ración" && productData.payload.doc.data().available === "Disponible") {
          this.raciones.push({
            id: productData.payload.doc.id,
            data: productData.payload.doc.data()
          })
        } else if (productData.payload.doc.data().plato === "Aderezo" && productData.payload.doc.data().available === "Disponible") {
          this.aderezos.push({
            id: productData.payload.doc.id,
            data: productData.payload.doc.data()
          })
        } else if (productData.payload.doc.data().plato === "Jugo" && productData.payload.doc.data().available === "Disponible") {
          this.jugos.push({
            id: productData.payload.doc.id,
            data: productData.payload.doc.data()
          })
        } else if (productData.payload.doc.data().plato === "Postre" && productData.payload.doc.data().available === "Disponible") {
          this.postres.push({
            id: productData.payload.doc.id,
            data: productData.payload.doc.data()
          })
        }

      })
    })
  }

}
