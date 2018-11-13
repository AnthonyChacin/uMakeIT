import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public afs: AngularFirestore) { }

  public getOrders() {
    return this.afs.collection('/orders/').snapshotChanges();
  }

  public getOrder(id: string) {
    return this.afs.collection('/orders/').doc(id);
  }

  public createOrder(data: any) {
    this.afs.collection('/orders/').add(data);
  }

  public updateOrder(data: any, id: string) {
    return this.afs.collection('/orders/').doc(id).set(data);
  }

  public deleteOrder(id: string) {
    return this.afs.collection('/orders/').doc(id).delete();
  }

}
