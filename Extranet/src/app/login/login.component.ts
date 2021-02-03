import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { GestAccessoService } from '../services/gest-accesso.service';

export class Utente
{
  constructor(
  public id?: number,
  public username ? : string,
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
  amministratore : boolean = false

  constructor(private route :Router, private app : AppComponent, private gestAccesso :GestAccessoService ) { }

  ngOnInit(): void {
    this.app.show=false
  }

  accesso()
  {
    
    if(this.utente.username != null && this.utente.password != null)
    {
      this.gestAccesso.autenticazioneAccesso(this.utente).subscribe(
        response=>{

         this.utente=response
         console.log(this.utente)

         if(response != null)
         {
           if(this.utente.stato===1)
           {
                if(this.utente.gruppo?.descrizione=="amministratore")
                {
                  window.alert("hai effettuato l'accesso come amministratore")
                  this.route.navigate(['homeadmin'])
                }
                else if(this.utente.gruppo?.descrizione=="utente")
                {
                  window.alert("hai effettuato l'accesso come utente")
                  this.route.navigate(['homeuser'])
                }
                this.app.show=true 
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
