import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument,  AngularFirestoreCollection} from '@angular/fire/firestore';
import { User} from '../../models/user'; 

import {Observable, ObservableLike} from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  constructor( private afs: AngularFirestore ) { 

  this.users = this.afs.collection('users').valueChanges();

  /* this.usersCollection = this.afs.collection('users');
    this.users = this.usersCollection.snapshotChanges().pipe(map( actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      })
    })) */
  }

  private path: string = '/users'; 

  //Obtener usuarios
  public getUsers(){
    return this.users;
    //return this.afs.collection(this.path).snapshotChanges();
  }

  //Obtener usuario
  public getUser(id: string){
    return this.afs.collection(this.path).doc(id);
  }

  //Crear un usuario
  public createUser(user: User){
    //this.usersCollection.add(user);
    return this.afs.collection(this.path).add(user);
  }

  //Actualizar usuario
  public updateUser(data: any, id: string){
    return this.usersCollection.doc(id).set(data);
  }

  //Eliminar usuario
  public deleteUser(id: string){
    return this.afs.collection(this.path).doc(id).delete();
  }

}
