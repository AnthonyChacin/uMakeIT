import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { OrdersService } from '../orders/orders.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user$: Observable<User>;
  userDocument: AngularFirestoreDocument;
  rol: string;
  claveInvalida: boolean;
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')

  constructor(
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    public ordersService: OrdersService) {
    this.claveInvalida = false;
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
    this.ordersService.getOrders().subscribe((orderSnapshot) => {
      orderSnapshot.forEach((orderData: any) => {
        if (orderData.payload.doc.data().reference_user === firebase.auth().currentUser.email && orderData.payload.doc.data().actual === true) {
          orderData.payload.doc.data().actual = false;
        }
      })
    })
    return this.afAuth.auth.signOut();
  }

  isLoggedIn() {
    const userLoggedIn = firebase.auth().currentUser
    if (!userLoggedIn) {
      this.router.navigate(['/login']);
      this.setLoggedIn(false);
      return false;
    } else {
      this.setLoggedIn(true);
      return true;
    }
  }

  isLoggedInAdmin() {
    const userLoggedInAdmin = firebase.auth().currentUser

    if (!userLoggedInAdmin) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
      /* firebase.firestore().collection('/users/').doc(userLoggedInAdmin.uid).onSnapshot((data) => {
        if( data.get('rol') === "Administrador" ){
          return true;
        }else{
          this.router.navigate(['/home']);
          return false;
        }
      }) */
    }

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
