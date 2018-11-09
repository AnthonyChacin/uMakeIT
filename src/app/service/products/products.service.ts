import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  products: Observable<Product[]>;


  constructor(public afs: AngularFirestore) {
    this.products = this.afs.collection('products').valueChanges();
  }

  getProducts(){
    return this.afs.collection('/products/').get();
  }

  createProduct(data: Product){
  	this.afs.collection('/products/').add(data);
  }
}
