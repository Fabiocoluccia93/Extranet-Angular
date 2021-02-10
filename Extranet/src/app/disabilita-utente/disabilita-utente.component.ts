import { Component, OnInit } from '@angular/core';
import { Gruppo, Utente } from '../login/login.component';
import { GestAccessoService } from '../services/gest-accesso.service';

@Component({
  selector: 'app-disabilita-utente',
  templateUrl: './disabilita-utente.component.html',
  styleUrls: ['./disabilita-utente.component.css']
})
export class DisabilitaUtenteComponent implements OnInit {

  tipologie : Gruppo[]=[]
  utente : Utente = new Utente
  gruppo : Gruppo = new Gruppo

  constructor(private gest :GestAccessoService ) { }

  ngOnInit(): void {
    this.gest.tuttiGruppi().subscribe(response=>{this.tipologie=response})
  }


  gruppoChanged(gruppo : Gruppo)
  {
    this.utente.gruppo = gruppo
  }

}
