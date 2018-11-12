import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import * as firebase from 'firebase';
import { Product } from '../../models/product';
import { Plate } from '../../models/plate';
import { Order } from '../../models/order';

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

  constructor(private productsService: ProductsService) { }

  agregarPlato() {

    if (this.name != "" && this.plate.cant != null) {
      this.productsService.getProducts().subscribe((productSnapshot) => {
        productSnapshot.forEach((productData: any) => {
          if (productData.payload.doc.data().name === this.name) {
            this.plato.push({
              id: productData.payload.doc.id,
              data: productData.payload.doc.data(),
              cant: this.plate.cant
            })
          }

        })
      })
    }
    console.log(this.plato);
    const platoName = [this.plato.length];
    const platoCant = [this.plato.length];

    for(let i = 0; i < this.plato.length; i++){
      platoName[i] = this.plato[i].data.name;
    }
    for(let i = 0; i < this.plato.length; i++){
      platoCant[i] = this.plato[i].cant;
    }
    
    const plato: any = {
      platoName1: {
        'plato2' : `${this.plato[0].data.name}`
      }
    }
    firebase.firestore().collection('/plates/').add(plato);
  }

  agregarRacion() {
    if (this.racion.name != "" && this.racion.cant != null) {
      this.productsService.getProducts().subscribe((productSnapshot) => {
        productSnapshot.forEach((productData: any) => {
          if (productData.payload.doc.data().name === this.racion.name) {
            this.plato.push({
              id: productData.payload.doc.id,
              data: productData.payload.doc.data(),
              cant: this.racion.cant
            })
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
              data: productData.payload.doc.data(),
              cant: this.aderezo.cant
            })
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
              data: productData.payload.doc.data(),
              cant: this.jugo.cant
            })
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
              data: productData.payload.doc.data(),
              cant: this.postre.cant
            })
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
        if (productData.payload.doc.data().plato === "Ración") {
          this.raciones.push({
            id: productData.payload.doc.id,
            data: productData.payload.doc.data()
          })
        } else if (productData.payload.doc.data().plato === "Aderezo") {
          this.aderezos.push({
            id: productData.payload.doc.id,
            data: productData.payload.doc.data()
          })
        } else if (productData.payload.doc.data().plato === "Jugo") {
          this.jugos.push({
            id: productData.payload.doc.id,
            data: productData.payload.doc.data()
          })
        } else if (productData.payload.doc.data().plato === "Postre") {
          this.postres.push({
            id: productData.payload.doc.id,
            data: productData.payload.doc.data()
          })
        }

      })
    })
  }

}
