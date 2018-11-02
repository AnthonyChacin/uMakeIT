import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from '../../models/user';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user$: Observable<User>;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router) { }


  registrerUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => {
          console.log(userData)
          resolve(userData),
            err => reject(err)
        });
    });
  }

  loginUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => {
          console.log(userData);
          resolve(userData),
            err => reject(err)
        });
    });
  }

 /*  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  } */

  logout() {
    return this.afAuth.auth.signOut();
  }


  /* //Obtener usuarios
  public getUsers(){
    return this.user$;
    //return this.afs.collection(this.path).snapshotChanges();
  }
  
  //Obtener usuario
  public getUser(id: string){
    return this.afs.collection(this.path).doc(id);
  } */

  //Crear un usuario
  public createUser(user: User, id: string) {
    return this.afs.collection('/users/').doc(id).set(user);
  }

  /* //Actualizar usuario
  public updateUser(data: any, id: string){
    return this.usersCollection.doc(id).set(data);
  }

  //Eliminar usuario
  public deleteUser(id: string){
    return this.afs.collection(this.path).doc(id).delete();
  } */

}
