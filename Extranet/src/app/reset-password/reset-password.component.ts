import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Gruppo, Utente } from '../classi/ClassiUtenti';

import { GestAccessoService } from '../services/gest-accesso.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private gest : GestAccessoService) { }

  utente : Utente = new Utente
  gruppo : Gruppo = new Gruppo
  utenti : Utente []=[]
  descrizione: string ="utente"

  cercaUtente : string =""

  dataSource = new MatTableDataSource(this.utenti)
  displayedColumns: string[] = ["username","accesso","stato","tasto"]
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.gest.utentiDiUnGruppo("utente").subscribe(
      response=>{
        this.dataSource.data=response
      })
  }

  cerca()
  {
    this.gest.cercaUtenteDiGruppo(this.cercaUtente, this.descrizione).subscribe(
      response=>{
        if(response.length>0)
        {
          this.dataSource.data=response
        }
        else
        {
          window.alert("Non esistono utenti con questo username")
          window.location.reload()
        }
      })
  }

  reset(utente : Utente)
  {
    this.gest.resetPassword(utente).subscribe(response=>{
      if(response == true)
      {
        window.alert("Hai resettato lo stato e la password dell' utente "+utente.username)
        window.location.reload()
      }
        })
  }

}
