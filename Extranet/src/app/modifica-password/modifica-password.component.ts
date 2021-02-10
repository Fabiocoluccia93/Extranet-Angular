import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage, SessionStorage, SessionStorageService } from 'angular-web-storage';
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
  nuovaPass ?: string | null
  confermaNuovaPass ?: string | null
  vecchiaPassword : string  =""
  modificaSecondoAccesso : boolean = false

  constructor(private route : Router, private app : AppComponent, private gestAccesso :GestAccessoService, private session : SessionStorageService ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('STATOACCESSO')=="1")
    {
     this.app.show = false
    }
    else
    {
      this.modificaSecondoAccesso=true
      this.app.show = true
    }
  }

    modificaPasswordPrimoAccesso()
    {
      if(this.nuovaPass!=null && this.nuovaPass.length>=6)
      {
        if(this.nuovaPass == this.confermaNuovaPass)
        {
          this.utente.id = this.session.get('ID')
          this.utente.password = this.confermaNuovaPass
          this.utente.primo_accesso = 0
          this.gestAccesso.modificaPassword(this.utente).subscribe(
          response=>{
            if (response == true)
          {
            sessionStorage.removeItem('STATOACCESSO')
            if(this.utente.primo_accesso!=null)
            {
              sessionStorage.setItem('STATOACCESSO',this.utente.primo_accesso.toString())
            }
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
      else
      {
        window.alert("La password deve contenere almeno 6 caratteri!")
        this.confermaNuovaPass = ""
        this.nuovaPass = ""
      }
    }


    modificaPassword()
    {
      this.utente.id= this.session.get('ID')
      this.utente.password = this.vecchiaPassword

      if(this.nuovaPass!=null && this.confermaNuovaPass!=null && this.nuovaPass.length>=6)
      {
        this.gestAccesso.confrontaPassword(this.utente).subscribe(
          response=>
          {
            if(response == true)
            {
              if(this.nuovaPass === this.confermaNuovaPass)
              {
                this.utente.id = this.session.get('ID')
                this.utente.password === this.confermaNuovaPass
                this.gestAccesso.modificaPassword(this.utente).subscribe(
                  response=>{
                    if (response = true)
                    {
                       window.alert("Password modificata correttamente")
                      this.route.navigate(['homepage'])
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
            else
              {
                window.alert("La vecchia password non è corretta")
                this.vecchiaPassword = ""
              }
          })
      }
      else
      {
        window.alert("La vuova password non puo essere vuota e deve contenere almeno 6 caratteri!")
      }
    }
    

}
