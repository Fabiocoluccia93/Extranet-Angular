import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { AppComponent } from '../app.component';
import { GestAccessoService } from '../services/gest-accesso.service';
import { SessionUtenteService } from '../services/session-utente.service';
import { Utente } from '../classi/ClassiUtenti';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utente : Utente = new Utente



  constructor(private route :Router, private app : AppComponent, private gestAccesso : GestAccessoService, private sessioneAutenticata : SessionUtenteService, private session:SessionStorageService ) { }

  ngOnInit(): void {
    this.app.show=false
  }

  accesso()
  {
    
    if(this.utente.username != null && this.utente.password != null)
    {
      this.gestAccesso.autenticazione(this.utente).subscribe(
        response=>{
         this.utente=response
         if(response != null)
         {
          this.sessioneAutenticata.autenticazioneAccesso(this.utente)
           if(this.utente.stato===1)
           {
                if(this.session.get('IDGRUPPO')=="1")
                {
                  window.alert("hai effettuato l'accesso come AMMINISTRATORE GENERALE")
                  this.route.navigate(['homepage'])          
                }
                else if(this.session.get('IDGRUPPO')=="2")
                {
                  window.alert("hai effettuato l'accesso come UTENTE AMMINISTRATORE")
                  this.route.navigate(['selezionacommessa'])
                }
                else if(this.session.get('IDGRUPPO')=="3")
                {
                  window.alert("hai effettuato l'accesso come utente")
                  this.route.navigate(['selezionacommessa'])
                }
                if(sessionStorage.getItem('STATOACCESSO')=="1"){
                  window.alert("Questo è il primo accesso che effettui, cambia password!")
                  this.route.navigate(['modificaPassword'])
                  
                }
                else{
                  this.app.show=true 
                }
           }  
           else
           {
             window.alert("Utente disabilitato, contattare l'amministratore.")
             window.location.reload()
           }        
         }

         else
         {
           window.alert("credenziali errate")
           window.location.reload()
         }
        })    
    }
    else
    {
      window.alert("inserisci le credenziali per verificare l'autenticazione")
    }
  }

}
