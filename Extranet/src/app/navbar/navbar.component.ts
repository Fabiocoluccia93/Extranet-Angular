import { Component, Input, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Utente } from '../login/login.component';
import { SessionUtenteService } from '../services/session-utente.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

utente : Utente = new Utente
amministratore : boolean = false

  constructor(private sessioneAutenticata : SessionUtenteService ,  private session : SessionStorageService , private route : Router) { }

  ngOnInit(): void {
    if(this.session.get('TIPOLOGIA')==="amministratore")
    {
      this.amministratore=true
    }
    else
    {
      this.amministratore = false
    }
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
