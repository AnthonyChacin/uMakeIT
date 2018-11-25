import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { OrdersService } from '../orders/orders.service';

interface UserData {
  uid: string;
  email: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  profile$: Observable<any>
  userDocument: AngularFirestoreDocument;
  email: any;
  rol: any;
  claveInvalida: boolean;
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')

  constructor(
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    public ordersService: OrdersService) {

    this.claveInvalida = false;
    this.rol = ""

    this.profile$ = this.afAuth.authState.pipe(
      switchMap( userData => {
        if(userData){
          return this.afs.doc(`users/${userData.email}`).snapshotChanges()
        }else{
          return this.afs.doc(`users/unregistred@gmail.com`).snapshotChanges()
        }
      }),map(profile => {
          return profile.payload.data() 
      })
    )
    
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
    localStorage.setItem('loggedIn', 'true')
  }

  registerUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => {
          console.log(userData)
          resolve(userData),
            err => reject(err)
        });
    });
  }

  loginUser(email: string, password: string, firstName: string, lastName: string, rol: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => {
          this.afAuth.authState 
          if (this.loggedInStatus === true) {
            this.afAuth.auth.signInWithEmailAndPassword(email, password)
          }
          const user = firebase.auth().currentUser;
          if (user != null) {
            user.updateProfile({ displayName: firstName + " " + lastName, photoURL: "..." }).then((res) => {
              this.setLoggedIn(true);
              console.log(res);
              console.log(user);
            }).catch((err) => {
              console.log(err);
            })
          }
          console.log(userData);
          console.log(user);
          resolve(userData),
            err => reject(err)
        }).catch((err) => {
          //this.claveInvalida = true;
          alert("¡Contraseña inválida!");
          console.log(err);
          //this.router.navigate(['/login']);
        })
    })
  }

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  logout() {

    return this.afAuth.auth.signOut();
  }

  ngOnInit(){

  }
  
  /* //Obtener usuarios
  public getUsers(){
    return this.user$;
    //return this.afs.collection(this.path).snapshotChanges();
  } */

  //Obtener usuario
  public getUser(id: string) {
    return this.afs.collection('/users/').doc(id);
  }

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
