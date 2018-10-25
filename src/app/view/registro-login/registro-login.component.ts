import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit {

  public mostrarLogin:boolean;
  public mostrarRegistro:boolean;
  public users = [];
  public userDocument: AngularFirestoreDocument;

  user = {} as User;

  constructor(private userService: UsersService, private router: Router) { 

    this.mostrarLogin = true;
    this.mostrarRegistro = false;
  }
  onShowHideRegistro(){
    this.mostrarLogin = false;
    this.mostrarRegistro = true;
  }
  onShowHideLogin(){
    this.mostrarLogin = true;
    this.mostrarRegistro = false;
  }

  onCreateUser(){
    this.user.rol = 0;
    this.userService.createUser(this.user);
    //this.userDocument = this.userService.getUser(this.user.email);
    this.router.navigate([`/home/${this.user.firstName}`]);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe( (data) => {
      console.log(data);
      this.users = data;
    });
  }

}
