import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private router: Router, private autenticacionService: AutenticacionService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.autenticacionService.isAuthenticated()){ // Si no está autenticado
      this.router.navigate(['/iniciosesion']); // Se redirigirá al Login
      return false;
    } else{
      return true;
    }
    
    //return this.autenticacionService.isAuthenticated();
  }
}
