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
  public user: any;

  constructor(private userService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const uid = firebase.auth().currentUser.email;
    firebase.firestore().collection('/users/').doc(uid).onSnapshot((data)=>{
      this.name = data.get('firstName') + " " + data.get('lastName');
    });
    console.log(this.name);
  }

  onClickLogout(){
    this.userService.logout();
  }

}
