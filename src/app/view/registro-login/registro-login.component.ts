import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Profile } from 'selenium-webdriver/firefox';


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

  constructor(private userService: UsersService, private router: Router) {
    this.mostrarLogin = true;
    this.mostrarRegistro = false;
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

    this.userService.registrerUser(email, password)
      .then((res) => {
        this.userService.loginUser(email, password);

        const user = firebase.auth().currentUser;
        if (user != null) {
          user.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("Provider-specific UID: " + user.uid);
            console.log("Email: " + profile.email);
          });
          const data: User = {
            email: user.email,
            firstName: firstName,
            lastName: lastName,
            rol: rol
          }
          this.userService.createUser(data, user.uid);
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
    this.userService.loginUser(email, password)
      .then((res) => {
        this.router.navigate(['/home']);
      }).catch((err) => {
        console.log(err);
        this.router.navigate(['/login']);
      });
  }

  ngOnInit() {
  }
}