import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.css']
})
export class HeaderClienteComponent implements OnInit {

  public name: string;

  constructor(private userService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.name = user.displayName;
      } else {
        this.name = "Undifine";
      }
    });
    console.log(this.name);
  }

  onClickLogout(){
    this.userService.logout();
  }

}
