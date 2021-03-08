import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import {  Utente } from '../classi/ClassiUtenti';
import { AppComponent } from '../app.component';
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
      this.session.set('ID',u.id)
      if(u.primo_accesso!=null)
      {
        sessionStorage.setItem('STATOACCESSO',u.primo_accesso.toString())
      }
      this.session.set('TIPOLOGIA' , u.gruppo?.descrizione)

      this.session.set('IDGRUPPO' , u.gruppo?.id)
      return true
    }
    else{
      return false
    }
  }

  isLoggato()
  {
    return ( this.session.get('ID') != null)? true : false
  }

  logOut()
  {
    this.session.clear()
    sessionStorage.clear()
  }
}
