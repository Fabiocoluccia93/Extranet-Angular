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
  tabella ?:[]=[]
  ricerca : boolean = false
  cercaUtente ?: string | null
  constructor(private gest :GestAccessoService ) { }

  dataSource = new MatTableDataSource(this.utenti)
  displayedColumns: string[] = ["username","accesso","stato","tasto"]
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  primo_accesso : string = ""
  stato : string = ""

  ngOnInit(): void {
    this.gest.tuttiGruppi().subscribe(response=>{this.tipologie=response})
    

  }

  gruppoChanged(gruppo : Gruppo)
  {
    if(gruppo.descrizione != null)
    {
      this.gest.utentiDiUnGruppo(gruppo.descrizione).subscribe(
        response=>{
          this.dataSource.data= response})

        this.dataSource.paginator = this.paginator
        this.ricerca=true
        this.descrizioneGruppo=gruppo.descrizione
    }

  }

  cerca()
  {
    if(this.cercaUtente != null)
    {
      this.gest.cercaUtenteDiGruppo(this.cercaUtente, this.descrizioneGruppo).subscribe(
        response=>{
          if(response.length>0)
          {
            this.utentiCercati = response
            this.dataSource.data= this.utentiCercati
          }
          else 
          {
            this.cercaUtente= ""
            this.dataSource.data=this.utenti
            window.alert("Non ci sono username di tipo "+this.descrizioneGruppo+" cercati.")
          }
        })

    }
    else
    {
      window.alert("Inserisci username da ricercare!")
    }
  }

  

}
