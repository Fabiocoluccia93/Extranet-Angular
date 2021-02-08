import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Commessa } from 'src/app/selezionacommessa/selezionacommessa.component'
import { InserimentoService } from 'src/app/services/inserimento.service'
import { Attivita } from 'src/app/assegnatask/assegnatask.component'
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-table-managment',
  templateUrl: './table-managment.component.html',
  styleUrls: ['./table-managment.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableManagmentComponent implements OnInit {

  isTableExpanded = false;
  commessa : Commessa [] = []
  detAttivita : Attivita[] = [];
  

  constructor(private ins : InserimentoService) { }

  dataSource = new MatTableDataSource(this.commessa);
  // dataAttivita = new MatTableDataSource(this.detAttivita);
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
