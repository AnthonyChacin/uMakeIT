import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UsersService } from '../service/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private usersService: UsersService
  ){}

  canActivate(){
    return this.usersService.isLoggedIn();
  }
}
