import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.css']
})
export class HeaderClienteComponent implements OnInit {

  usersService: UsersService;
  userName: string;

  constructor(private service: UsersService, private route: ActivatedRoute) {
    this.usersService = service;
   }

  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get('name');
  }

}
