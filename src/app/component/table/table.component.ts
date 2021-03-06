import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public filtro: String;
  public products = [];
  public downloadURL: string;
  public product = {} as Product;

  constructor(private productsService: ProductsService, private router: Router) {
    this.product.name = "";

  }

  onShowFormProduct(name: String) {
    this.router.navigate([`/product-edit/${name}`]);
  }

  onShowAlert(name: String) {
    var mensaje = confirm("¿Estás seguro de que deseas eliminar el producto? Si haces click en 'Aceptar', el mismo no podrá ser recuperado.");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
      this.productsService.getProducts().subscribe((productSnapshot) => {
        productSnapshot.forEach((productData: any) => {
          firebase.firestore().collection('/products/').doc(productData.payload.doc.id).onSnapshot((data) => {
            if (data.get('name') === name) {
              this.productsService.deleteProduct(productData.payload.doc.id);
              alert("¡El producto ha sido eliminado con éxito!");
            }
          })
        })
      })
    }
  }

  onShowTableFiltered() {
    this.filtro = this.product.name;
    this.getProductsFiltro();
  }

  getProductsFiltro() {
    if (this.filtro != "") {
      this.productsService.getProducts().subscribe((productSnapshot) => {
        this.products = [];
        productSnapshot.forEach((productData: any) => {
          firebase.firestore().collection('/products/').doc(productData.payload.doc.id).onSnapshot((data) => {
            if (data.get('name') === this.filtro || data.get('available') === this.filtro || data.get('price').toString() === this.filtro) {
              this.products.push({
                id: productData.payload.doc.id,
                data: productData.payload.doc.data()
              })
            }
          })
        })
      })
    } else {
      this.productsService.getProducts().subscribe((productSnapshot) => {
        this.products = [];
        productSnapshot.forEach((productData: any) => {
          this.products.push({
            id: productData.payload.doc.id,
            data: productData.payload.doc.data()
          })
        })
      })
    }
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe((productSnapshot) => {
      this.products = [];
      productSnapshot.forEach((productData: any) => {
        this.products.push({
          id: productData.payload.doc.id,
          data: productData.payload.doc.data()
        })
      })
    })
  }

}
