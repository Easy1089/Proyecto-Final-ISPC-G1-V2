import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.estaAutenticado) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión si no está autenticado
      return false;
    }
  }
}


/*import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService
      ) { }

      canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable <boolean> {
          console.log("¿Está autenticado?", this.authService.estaAutenticado);
         return this.authService.estaAutenticado.pipe(take (1),
         map((isLogged:boolean)=>isLogged));
      }
    }
*/
