import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionUtenteService } from './session-utente.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate{

  constructor(private sessioneAutenticazione:SessionUtenteService , private route : Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.sessioneAutenticazione.isLoggato())
    {
      this.route.navigate(['login'])
      return false
    }
    else
    {
      return true
    }
  }


}
