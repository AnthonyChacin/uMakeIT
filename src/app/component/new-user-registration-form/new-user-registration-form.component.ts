import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from '../../service/users/users.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-new-user-registration-form',
  templateUrl: './new-user-registration-form.component.html',
  styleUrls: ['./new-user-registration-form.component.css']
})

export class NewUserRegistrationFormComponent implements OnInit {

  public newAdmin: boolean;
  public newAdmin1: boolean;
  public user = {} as User;

  constructor(private userService: UsersService, private router: Router) {
  }

  onCreateUser() {
    const email = this.user.email;
    const password = this.user.psw;
    const rol = 'Administrador';
    const firstName = this.user.firstName;
    const lastName = this.user.lastName;
    firebase.firestore().collection('/users/').doc(this.user.email).onSnapshot((data) => {
      if (data.get('email') === email) {
        this.newAdmin1 = true;

      } else {
        this.newAdmin1 = false;
        this.newAdmin = true;
      }
    });
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.email = "";
    this.user.psw = "";
    this.userService.registerUser(email, password)
      .then((res) => {
        const data: User = {
          email: email,
          firstName: firstName,
          lastName: lastName,
          psw: null,
          pswn: null,
          pswnc: null,
          rol: rol
        }
        this.userService.createUser(data, email);
      }).catch((err) => {
        console.log(err);
      });

  }

  ngOnInit() {
    this.newAdmin = false;
    this.newAdmin1 = false;
  }

}
