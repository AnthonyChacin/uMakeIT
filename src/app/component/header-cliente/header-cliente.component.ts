import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.css']
})
export class HeaderClienteComponent implements OnInit {

  public name: string;
  public user: any;
  public profile$: Observable<any>;

  constructor(private userService: UsersService, private route: ActivatedRoute, private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe( data => {
      this.name = data.displayName;
    })
  }

  onClickLogout(){
    this.userService.logout();
  }

}
