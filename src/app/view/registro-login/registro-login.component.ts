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
    //this.user.mostrar = true;
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
        if(this.users[i].rol === 1){
          this.router.navigate([`/home-admin/${this.users[i].firstName}`]);
        }else{
          this.router.navigate([`/home/${this.users[i].firstName}`]);
        }
        
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