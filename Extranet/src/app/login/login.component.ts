import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { AppComponent } from '../app.component';
import { GestAccessoService } from '../services/gest-accesso.service';
import { SessionUtenteService } from '../services/session-utente.service';

export class Utente
{
  constructor(
  public id ?: number ,
  public username  ?: string,
  public password ?:  string,
  public stato ?: number,
  public primo_accesso ?: number,
  public gruppo ?: Gruppo
  ){}
}

export class Gruppo
{
  constructor(
   public id  ?: number,
   public descrizione ?: string
    ) {}
} 

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
                if(this.session.get('TIPOLOGIA')=="amministratore")
                {
                  window.alert("hai effettuato l'accesso come amministratore")
                  this.route.navigate(['homepage'])          
                }
                else if(this.session.get('TIPOLOGIA')=="utente")
                {
                  window.alert("hai effettuato l'accesso come utente")
                  this.route.navigate(['homepage'])
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
