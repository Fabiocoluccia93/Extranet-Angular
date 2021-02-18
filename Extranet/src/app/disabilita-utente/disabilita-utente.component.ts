import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  utenti : Utente []=[]
  utentiCercati : Utente [] = []
  descrizioneGruppo: string=""
  ricerca : boolean = false
  cercaUtente ?: string | null

  displayedColumns: string[] = []

  constructor(private gest :GestAccessoService ) { }

  dataSource = new MatTableDataSource(this.utenti)
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.gest.tuttiGruppi().subscribe(response=>{this.tipologie=response})

  }

  gruppoChanged(gruppo : Gruppo)
  {
    if(gruppo.descrizione != null)
    {
      this.gest.utentiDiUnGruppo(gruppo.descrizione).subscribe(
        response=>{         
          this.dataSource.data=response
          this.utenti=response
          })

        this.dataSource.paginator = this.paginator
        this.ricerca=true
        this.descrizioneGruppo=gruppo.descrizione
        if(gruppo.descrizione=="amministratore")
        {
          this.displayedColumns =  ["username","accesso","stato"]
        }
        if(gruppo.descrizione=="utente")
        {
          this.displayedColumns =  ["username","accesso","stato","tasto"]
        }

    }
  }

  

  cerca()
  {
    if(this.cercaUtente != null && this.cercaUtente!="")
    {
      this.gest.cercaUtenteDiGruppo(this.cercaUtente, this.descrizioneGruppo).subscribe(
        response=>{
          if(response.length>0)
          {
            this.utentiCercati = response
            this.dataSource.data= this.utentiCercati
            this.cercaUtente= ""
          }
          else 
          {
            this.dataSource.data=this.utenti
            this.cercaUtente= ""
            window.alert("Non ci sono username di tipo "+this.descrizioneGruppo+" cercati.")
          }
        })

    }
    else if(this.cercaUtente== null)
    {
      this.dataSource.data=this.utenti
      window.alert("Inserisci username da ricercare!")
    }
  }


  abilita(utente : Utente)
  {
    utente.stato = 1
    this.gest.disabilitaUtente(utente).subscribe(response=>{
      if(response == true)
      {
        window.alert(utente.username+" Attivato")
      }
    })
  }
  
  disabilita(utente : Utente)
  {
    utente.stato = 0
    this.gest.disabilitaUtente(utente).subscribe(response=>{
      if(response == true)
      {
        window.alert(utente.username+" Disattivato")
      }
    })
  }

}
