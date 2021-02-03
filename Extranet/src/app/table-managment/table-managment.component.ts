import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Commessa } from 'src/app/selezionacommessa/selezionacommessa.component'
import { InserimentoService } from 'src/app/services/inserimento.service'
import { Attivita } from 'src/app/assegnatask/assegnatask.component'
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

@Component({
  selector: 'app-table-managment',
  templateUrl: './table-managment.component.html',
  styleUrls: ['./table-managment.component.css'],
})
export class TableManagmentComponent implements OnInit {

  commessa : Commessa [] = []
  detAttivita : Attivita[] = []

  constructor(private ins : InserimentoService) { }

  dataSource = new MatTableDataSource(this.commessa);
  displayedColumns: string[] = ['cod', 'nome', 'cliente', 'valore', 'inizio', 'fine', "getdetails"]
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.paginator = this.paginator
    this.ins.getCommessa().subscribe(response=>{this.commessa=response;
    this.dataSource.data = this.commessa;
    })
  }

  getRecord(id_commessa: any)
  {
    this.ins.getCommessaAttivita(id_commessa).subscribe(response=>{this.detAttivita=response;})
  }


}
