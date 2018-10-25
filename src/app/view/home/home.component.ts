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


  constructor() { 

  }

  ngOnInit() {
  }

}
