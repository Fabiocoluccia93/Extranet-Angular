import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private sessioneAutenticata : SessionUtenteService ,  private session : SessionStorageService) { }

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

  logOut()
  {
    this.sessioneAutenticata.logOut()
  }
}
