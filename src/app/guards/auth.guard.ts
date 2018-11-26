import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../service/users/users.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private usersService: UsersService,
    private router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	return this.usersService.profile$.pipe(
 	take(1),
  	map(user => {
  		if(user){
	  		if(user.rol === "Cliente"){
	  			console.log("Acceso consedido")
	  			return true;
	  		}else if(user.rol === "Administrador"){
	  			console.log("Acceso denegado")
	  			this.router.navigate(['/home-admin'])
	  			alert("Acceso denegado!! No tiene privilegios de cliente")
	  			return false;
	  		}else{
	  			console.log("Acceso denegado")
			  	this.router.navigate(['/login'])
			  	alert("Acceso denegado!! Usted no es un usuario registrado")
		  		return false
	  		}
  		}else{
  			console.log("Acceso denegado")
	  		this.router.navigate(['/login'])
  			return false
  		}	
  	}))

  }
}
