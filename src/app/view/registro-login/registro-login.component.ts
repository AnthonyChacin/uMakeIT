import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Profile } from 'selenium-webdriver/firefox';
import { OrdersService } from '../../service/orders/orders.service';


@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit {

  public mostrarLogin: boolean;
  private afAuth: AngularFireAuth;
  public mostrarRegistro: boolean;
  public users: User[];
  public user = {} as User;
  public cuentaExistente: boolean;
  public cuentaInexistente: boolean;
  public claveIncorrecta: boolean;

  constructor(private userService: UsersService, private ordersService: OrdersService, private router: Router) {
    this.mostrarLogin = true;
    this.mostrarRegistro = false;
    this.cuentaExistente = false;
    this.cuentaInexistente = false;
    this.claveIncorrecta = false;
  }
  onShowHideRegistro() {
    this.mostrarLogin = false;
    this.mostrarRegistro = true;
  }
  onShowHideLogin() {
    this.mostrarLogin = true;
    this.mostrarRegistro = false;
  }

  onCreateUser() {
    const email = this.user.email;
    const password = this.user.psw;
    const rol = 'Cliente';
    const firstName = this.user.firstName;
    const lastName = this.user.lastName;

    this.userService.registerUser(email, password)
      .then((res) => {
        this.userService.loginUser(email, password, firstName, lastName, rol);
        const user = firebase.auth().currentUser;
        if (user != null) {
          const data: User = {
            email: user.email,
            firstName: firstName,
            lastName: lastName,
            psw: null,
            pswn: null,
            pswnc: null,
            rol: rol
          }
          this.userService.createUser(data, user.email);
          user.updateProfile({ displayName: firstName + " " + lastName, photoURL: "..." }).then((res) => {
            console.log(res);
            console.log(user);
          }).catch((err) => {
            console.log(err);
          })
        }
        this.onIniciarSesion();
      }).catch((err) => {
        console.log(err);

      });
  }

  onIniciarSesion() {
    const email = this.user.email;
    const password = this.user.psw;
    this.user.email = "";
    this.user.psw = "";
    firebase.firestore().collection('/users/').doc(email).onSnapshot((data) => {
      const firstName = data.get('firstName');
      const lastName = data.get('lastName');
      const rol = data.get('rol');
      if (data.get('email') !== email) {
        this.cuentaInexistente = true;
      }
      this.userService.loginUser(email, password, firstName, lastName, rol)
        .then((res) => {
          firebase.firestore().collection('/users/').doc(email).onSnapshot((data) => {
            if (data.get('rol') === "Administrador") {
              this.router.navigate(['/home-admin']);
            } else if (data.get('rol') === "Cliente") {          
              this.router.navigate(['/home']);
            }
          })
        }).catch((err) => {
          console.log(err);
        });
    });
  }


  ngOnInit() {
  }
}