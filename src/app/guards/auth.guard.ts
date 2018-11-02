import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/take';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsersService } from '../service/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router, 
    private afAuth: AngularFireAuth, 
    private usersService: UsersService
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
