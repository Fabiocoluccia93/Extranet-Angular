import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Commessa } from 'src/app/selezionacommessa/selezionacommessa.component'
import { InserimentoService } from 'src/app/services/inserimento.service'
import { Attivita } from 'src/app/assegnatask/assegnatask.component'
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RouterLinkWithHref } from '@angular/router';
import { Avanzamento } from '../inseriscitask/inseriscitask.component';

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

  isTableExpanded : boolean = false
  commessa : Commessa [] = []
  detAttivita : Attivita[] = [];
  avanzamento : Avanzamento [] = [];
  

  constructor(private ins : InserimentoService) { }

  dataSource = new MatTableDataSource(this.commessa);
  // dataAttivita = new MatTableDataSource(this.detAttivita);
  displayedColumns: string[] = ['cod', 'nome', 'cliente', 'valore', 'inizio', 'fine', "getdetails"]
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  ngOnInit(): void {
    
    this.dataSource.paginator = this.paginator;
    this.ins.getCommessa().subscribe(response=>{this.commessa=response;
    this.dataSource.data = this.commessa;
    })
  }

  getRecord(id_commessa: any)
  {
    this.ins.getCommessaAttivita(id_commessa).subscribe(response=>{this.detAttivita=response;})
    this.avanzamento = []
    this.ins.getAvanzamentoByCommessa(id_commessa).subscribe(getavanzamento=>{this.avanzamento=getavanzamento;})
  }

  // close(id_commessa: any) {
  //   for(let i : number = 0; i<=this.commessa.length;i++)
  //     if(id_commessa == this.commessa[i].id_commessa) {
  //       console.log("quello che passo " + id_commessa)
  //       console.log("quello che ho " + this.commessa[i].id_commessa)
        
  //     }
  //   }


  toggleTableRows(id_commessa: any) {
    
    this.dataSource.data.forEach((row: any) => {
      if(id_commessa == row.id_commessa){
        console.log("pirma " + row.isExpanded)
        row.isExpanded = !row.isExpanded
        console.log("dopo " + row.isExpanded)
      }else{
        row.isExpanded = false;
      }
    })
    
  }
}

