import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlatesService {

  public agregar: boolean = true;
  public editar: boolean = false;
  constructor(public afs: AngularFirestore) { }

  public setAgregar(a: boolean){
    this.agregar = a;
  }

  public getAgregar(){
    return this.agregar;
  }

  public setEditar(e: boolean){
    this.editar = e;
  }

  public getEditar(){
    return this.editar;
  }

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
    return this.afs.collection('/plates/').doc(id).delete();
  }
}
