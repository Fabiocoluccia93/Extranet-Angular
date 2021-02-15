import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Gruppo, Utente } from '../login/login.component';
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

  cercaUtente : string =""

  dataSource = new MatTableDataSource(this.utenti)
  displayedColumns: string[] = ["username","accesso","stato"]
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
    this.gest.cercaUtente(this.cercaUtente).subscribe(
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

}
