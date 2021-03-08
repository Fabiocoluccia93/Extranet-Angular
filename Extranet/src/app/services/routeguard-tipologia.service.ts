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


    //VISUALIZZAZIONE 

    
    switch(this.session.get('IDGRUPPO'))
    {
 
      case 2: 
        return true
      case 3:
        return true
        default : 

        
        this.route.navigate(['homepage'])
        return false  
    }

     
  }
}
