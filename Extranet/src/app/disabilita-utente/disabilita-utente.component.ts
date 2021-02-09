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
  gruppo : Gruppo = new Gruppo
  utenti : Utente[] = []
  descrizione : string =""
  visualizza:boolean = false

  constructor(private gest : GestAccessoService) { }

  utentii =  new MatTableDataSource(this.utenti)
  displayedColumns : string[] = ['username','primoAccesso','stato']
  @ViewChild(MatPaginator, {static : true})
  paginator!: MatPaginator

  ngOnInit(): void {
    this.gest.tuttiGruppi().subscribe(response=>{this.tipologie=response})
  }
  
  
  gruppoChanged(gruppo : Gruppo)
  {
    if(gruppo.descrizione != null){
      this.descrizione=  gruppo.descrizione
    }
    this.gest.utentiDiUnGruppo(this.descrizione).subscribe(response =>{this.utenti=response})
    this.visualizza = true  
    console.log(this.utenti)
    console.log(this.descrizione)
    
    this.utentii.paginator = this.paginator
  }

}
