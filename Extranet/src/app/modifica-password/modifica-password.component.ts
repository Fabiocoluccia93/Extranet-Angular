import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { AppComponent } from '../app.component';
import { Utente } from '../login/login.component';
import { GestAccessoService } from '../services/gest-accesso.service';

@Component({
  selector: 'app-modifica-password',
  templateUrl: './modifica-password.component.html',
  styleUrls: ['./modifica-password.component.css']
})
export class ModificaPasswordComponent implements OnInit {

  utente : Utente = new Utente
  nuovaPass : string = ""
  confermaNuovaPass : string = ""
  vecchiaPassword : string = "" 
  modificaSecondoAccesso : boolean = false

  constructor(private route : Router, private app : AppComponent, private gestAccesso :GestAccessoService, private session : SessionStorageService ) { }

  ngOnInit(): void {
    this.utente = this.session.get('UTENTE')
    console.log(this.utente)
    if(this.utente.primo_accesso===1)
    {
     this.app.show = false
     console.log(this.utente)
    }
    else
    {
      this.modificaSecondoAccesso = true
      this.app.show = true
    }
    }
    
    
    modificaPasswordPrimoAccesso()
    {
      if(this.nuovaPass === this.confermaNuovaPass){
        this.utente.password = this.confermaNuovaPass
        this.utente.primo_accesso = 0
      this.gestAccesso.modificaPassword(this.utente).subscribe(
      response=>{
        if (response = true)
        {
          this.session.remove('UTENTE')
          this.session.set('UTENTE',this.utente)
          console.log(this.utente)
          window.alert("Password modificata correttamente")
          this.route.navigate(['homepage'])
          this.app.show=true
        }
      })
    }
    else 
    {
      window.alert("Le password non coincidono")
      this.confermaNuovaPass = ""
      this.nuovaPass = ""
    }
  }

  modificaPassword()
  {
    if(this.nuovaPass === this.confermaNuovaPass)
    {
      this.utente.password = this.confermaNuovaPass
    this.gestAccesso.modificaPassword(this.utente).subscribe(
    response=>{
      
      if(this.vecchiaPassword === this.utente.password)
      {
        if (response = true)
        {
          this.session.remove('UTENTE')
          this.session.set('UTENTE',this.utente)
          console.log(this.utente)
          window.alert("Password modificata correttamente")
          this.route.navigate(['homepage'])
          this.app.show=true
        }
      }
      else 
      {
        window.alert("inserisci correttamente la vecchia password")
      }
      })

    }
   else 
    {
      window.alert("Le password non coincidono")
      this.confermaNuovaPass = ""
      this.nuovaPass = ""
    }
  }

}
