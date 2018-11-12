import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import * as firebase from 'firebase';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-customization',
  templateUrl: './product-customization.component.html',
  styleUrls: ['./product-customization.component.css']
})
export class ProductCustomizationComponent implements OnInit {
  @Input() name: String;
  public product = {} as Product;
  public racion = {} as Product;
  public aderezo = {} as Product;
  public jugo = {} as Product;
  public postre = {} as Product;
  public raciones = [];
  public aderezos = [];
  public jugos = [];
  public postres = [];
  public productID: any;

  constructor(private productsService: ProductsService) { }

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
