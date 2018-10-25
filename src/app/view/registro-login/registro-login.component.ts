import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit {

  public mostrarLogin: boolean;
  public mostrarRegistro: boolean;
  public users: User[];
  public userDocument: AngularFirestoreDocument;
  public cuentaExistente: boolean;
  public a: boolean; b: string; c: string; d: string; e: string;  f: number;
  public user = {} as User;

  constructor(private userService: UsersService, private router: Router) {
    this.cuentaExistente = false;
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
    this.user.rol = 0;
    this.user.mostrar = true;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === this.user.email) {
        this.cuentaExistente = true;
      } else {
        this.userService.createUser(this.user);
        this.router.navigate([`/home/${this.users[i].firstName}`]);
      }
    }

  }

  onIniciarSesion() {
    
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].email === this.user.email){





        /* this.user.mostrar = true;
        this.user.firstName = this.users[i].firstName;
        this.user.id = this.users[i].id ;
        this.user.lastName = this.users[i].lastName;
        this.user.psw = this.users[i].psw;
        this.user.rol = this.users[i].rol;
        this.a = this.user.mostrar;
        this.b = this.user.firstName;
        this.c = this.user.id;
        this.d = this.user.lastName;
        this.e = this.user.psw;
        this.f = this.user.rol;
        this.users[i].firstName = this.b;
        this.users[i].id = this.c;
        this.users[i].lastName = this.d;
        this.users[i].psw = this.e;
        this.users[i].rol = this.f;
        this.users[i].mostrar = this.a; */
        this.router.navigate([`/home/${this.users[i].firstName}`]);
      }
    }
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }
}