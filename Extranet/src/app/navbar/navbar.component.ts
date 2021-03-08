import { Component, Input, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Abilitazioni, Utente } from '../classi/ClassiUtenti';
import { GestAccessoService } from '../services/gest-accesso.service';

import { SessionUtenteService } from '../services/session-utente.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

utente : Utente = new Utente
abilitazioni : Abilitazioni = new Abilitazioni

  constructor(private sessioneAutenticata : SessionUtenteService ,  private session : SessionStorageService , private route : Router, private gest :GestAccessoService) { }

  ngOnInit(): void {
    this.gest.getAbilitazioniByTipoUtente(this.session.get('IDGRUPPO')).subscribe(response=>
      {
        this.abilitazioni=response
      })
  }

  visualizza()
  {
    this.session.remove('IDCOMMESSA')
    sessionStorage.removeItem('idcommessa')
    setTimeout('location.reload(true)', 0)
    this.route.navigate(['selezionacommessa'])
  }

  logOut()
  {
    this.sessioneAutenticata.logOut()
  }
}
