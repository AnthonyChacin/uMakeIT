import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { RegistroLoginComponent } from '../../view/registro-login/registro-login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.css']
})
export class HeaderClienteComponent implements OnInit {

  users: User[];
  constructor(private usersService: UsersService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users =>{
      console.log(users);
      this.users = users;
    })
    this.usersService.name = this.route.snapshot.paramMap.get('name');
  }

}
