import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usersService:UsersService;
  userDoc: AngularFirestoreDocument;
  user = {} as User;
  userName: string;

  constructor(private service: UsersService, private route: ActivatedRoute) { 
    this.usersService = service;
  }

  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get('name');
  }

}
