import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  private path: string = '/users';

  //Obtener usuarios
  public getUsers(){
    return this.afs.collection(this.path).snapshotChanges();
  }

  //Obtener usuario
  public getUser(id: string){
    return this.afs.collection(this.path).doc(id).snapshotChanges();
  }

  //Crear un usuario
  public createUser(data: any){
    return this.afs.collection(this.path).add(data);
  }

  //Actualizar usuario
  public updateUser(data: any, id: string){
    return this.afs.collection(this.path).doc(id).set(data);
  }

  //Eliminar usuario
  public deleteUser(id: string){
    return this.afs.collection(this.path).doc(id).delete();
  }


}
