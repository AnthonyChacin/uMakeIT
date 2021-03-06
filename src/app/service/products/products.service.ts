import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Observable<Product[]>;
  public productos = [];


  constructor(public afs: AngularFirestore) {
    this.products = this.afs.collection('products').valueChanges();
  }

  public getProducts() {
    return this.afs.collection('/products/').snapshotChanges();
  }

  public getProduct(id: string) {
    return this.afs.collection('/products/').doc(id);
  }

  public createProduct(data: Product) {
    this.afs.collection('/products/').add(data);
  }

  public updateProduct(data: any, id: string) {
    return this.afs.collection('/products/').doc(id).set(data);
  }

  public deleteProduct(id: string) {
    return this.afs.collection('/products/').doc(id).delete();
  }

}
