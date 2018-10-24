import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { User} from '../../models/user'; 

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersCollection;
  users: Observable<User[]>;
  usersDoc;

  constructor( private afs: AngularFirestore ) { 
    this.users = this.afs.collection('users').valueChanges();
  }

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
