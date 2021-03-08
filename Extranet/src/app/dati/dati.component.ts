import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Risorsa, Risorse } from '../classi/ClassiGenerali';
import { InserimentoService } from '../services/inserimento.service';

@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrls: ['./dati.component.css']
})
export class DatiComponent implements OnInit {

  risorsearray : Risorse[] = []
  titolo : string = 'Inserimento Risorse'
  constructor(private inserimento : InserimentoService) { }

  dataSource = new MatTableDataSource(this.risorsearray);
  displayedColumns: string[] = ['id', 'nome', 'tariffa', 'attivo', 'iniziovalidita', "getdetails"]
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  

  ngOnInit(): void 
  { 
      this.inserimento.getRisorse().subscribe(response=>{this.risorsearray=response
      this.dataSource.data = this.risorsearray 
      console.log(this.risorsearray)})
      this.dataSource.paginator = this.paginator
  }

  risorsa : Risorse = new Risorse()
  visualizza : boolean = false
  messaggio : string = '';

  inserimentoRisorse()
  {
    this.modifica = false  
    this.visualizza = true;
  }

  inserisciRisorsa()
  {
    this.risorsa.iniziovalidita= new Date
    this.risorsa.attivo = true
    this.inserimento.setRisorse(this.risorsa).subscribe(response=>{this.messaggio=response})
    this.visualizza = false;
    setTimeout("location.reload(true);",1000)
  }
  modifica :boolean = false
  risorsamod : Risorse = new Risorse

  modificaRisorsa(risorsamod : Risorsa)
  {
    this.risorsamod = risorsamod;
    this.visualizza =false 
    this.modifica = true  
  }

 
  eseguiModificaRisorse()
  {
    this.risorsamod.attivo = false
    this.inserimento.modRisorse(this.risorsamod).subscribe(response=>{this.messaggio=response})
    this.modifica = false 
    setTimeout("location.reload(true);",1000)
  }


}
