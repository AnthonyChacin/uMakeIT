import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsersService } from '../service/users/users.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
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
	  		if(user.rol === "Administrador"){
	  			console.log("Acceso consedido")
	  			return true;
	  		}else if(user.rol === "Cliente"){
	  			console.log("Acceso denegado")
	  			this.router.navigate(['/home'])
	  			alert("Acceso denegado!! No tiene privilegios de administrador")
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
