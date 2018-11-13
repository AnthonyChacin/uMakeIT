import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlatesService {

  constructor(public afs: AngularFirestore) { }

  public getPlates() {
    return this.afs.collection('/plates/').snapshotChanges();
  }

  public getPlate(id: string) {
    return this.afs.collection('/plates/').doc(id);
  }

  public createPlate(data: any) {
    this.afs.collection('/plates/').add(data);
  }

  public updatePlate(data: any, id: string) {
    return this.afs.collection('/plates/').doc(id).set(data);
  }

  public deletePlate(id: string) {
    return this.afs.collection('/orders/').doc(id).delete();
  }
}
