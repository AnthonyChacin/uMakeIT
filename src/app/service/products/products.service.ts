import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  productsCollection;
  products: Observable<Product[]>;
  productDoc;


  constructor(public afs: AngularFirestore) {
    this.products = this.afs.collection('products').valueChanges();
  }
}
