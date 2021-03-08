import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { SessionUtenteService } from './session-utente.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardTipologia2Service {

  constructor(private sessioneAutenticazione:SessionUtenteService , private route : Router , private session : SessionStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {

    //SOLO PER LE PAGINE ACCESSIBILI AMMINISTRATORE
    
      if (this.session.get('IDGRUPPO') == '1')
      {
        return true
      }
      else
      {
      this.route.navigate(['selezionacommessa'])
       return false
     }
  }


}
