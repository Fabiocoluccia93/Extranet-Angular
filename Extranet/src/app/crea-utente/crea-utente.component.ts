import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gruppo, Utente } from '../login/login.component';
import { GestAccessoService } from '../services/gest-accesso.service';

@Component({
  selector: 'app-crea-utente',
  templateUrl: './crea-utente.component.html',
  styleUrls: ['./crea-utente.component.css']
})
export class CreaUtenteComponent implements OnInit {

  tipologie : Gruppo[]=[]
  utente : Utente = new Utente
  gruppo : Gruppo = new Gruppo

  constructor( private route : Router, private gest : GestAccessoService) { }

  ngOnInit(): void {
    this.gest.tuttiGruppi().subscribe(response=>{this.tipologie=response})
  }

  crea()
  {
    this.gest.creaUtente(this.utente).subscribe(
      response=>{
        if(response===true)
        {
          window.alert("utente creato correttamente")
          window.location.reload()
        }
        else {
          window.alert("utente gia presente nel sistema.")
          window.location.reload()
        }
      })
  }

  gruppoChanged(gruppo : Gruppo)
  {
    this.utente.gruppo = gruppo
  }
}
