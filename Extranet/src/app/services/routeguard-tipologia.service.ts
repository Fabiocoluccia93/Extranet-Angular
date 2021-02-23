import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { SessionUtenteService } from './session-utente.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardTipologiaService {

  constructor(private sessioneAutenticazione:SessionUtenteService , private route : Router , private session : SessionStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if (this.sessioneAutenticazione.isLoggato())
    {
      if (this.session.get('TIPOLOGIA') == 'utente')
      {
        this.route.navigate(['selezionacommessa'])
        return false
      }
     else
     {
       return true
     }
    }
    else
    {
      this.route.navigate(['login'])
      return false
    }
  }
}
