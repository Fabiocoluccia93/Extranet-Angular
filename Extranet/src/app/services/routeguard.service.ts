import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Observable } from 'rxjs';
import { SessionUtenteService } from './session-utente.service';

@Injectable({
  providedIn: 'root'
})



export class RouteguardService implements CanActivate{

  constructor(private sessioneAutenticazione:SessionUtenteService , private route : Router , private session : SessionStorageService) { }


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
