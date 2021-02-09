import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Utente } from '../login/login.component';
import { GestAccessoService } from './gest-accesso.service';


@Injectable({
  providedIn: 'root'
})
export class SessionUtenteService {

  constructor( private session:SessionStorageService, private autentica : GestAccessoService) { }

  
  autenticazioneAccesso(u : Utente)
  {
    if(this.autentica.autenticazione(u) !=null)
    {
      this.session.set('UTENTE',u)
      return true
    }
    else{
      return false
    }
  }

  isLoggato()
  {
    return ( this.session.get('UTENTE') != null)? true : false
  }


  logOut()
  {
    this.session.remove('UTENTE')
  }
}
