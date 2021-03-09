import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Anno, Attivita, Avanzamento, Mese, TipoAvanzamento } from '../classi/ClassiGenerali';
import { InserimentoService } from '../services/inserimento.service';

@Component({
  selector: 'app-visualizza-avanzamento',
  templateUrl: './visualizza-avanzamento.component.html',
  styleUrls: ['./visualizza-avanzamento.component.css']
})
export class VisualizzaAvanzamentoComponent implements OnInit {

  constructor(public activatedroute : ActivatedRoute, public inserisci : InserimentoService, private session: SessionStorageService) { }

 
  @Input()
  b: number = 0;

  commessaid : string | null = ''
  a : number = 0
  
 attivitas : Attivita[] = []
 mesi : Mese [] = []
 anni : Anno[]= []
  tipiavanzamenti : TipoAvanzamento[]=[]
  tipoavanzamento:TipoAvanzamento= new TipoAvanzamento

 anno:Anno=new Anno
visualizza : boolean = false
 
  ngOnInit(): void
  {
    this.activatedroute.data.subscribe(data => { 
      if(data.kind=='a')
      {
        this.visualizza=true
      }
  })
    this.commessaid = sessionStorage.getItem("idcommessa")
    console.log("id commessa storage"+sessionStorage.getItem("idcommessa"))
    if(this.commessaid!= null )
    {
      this.a = +this.commessaid
      console.log("id commessa"+this.a)
    }
    
      this.inserisci.getAnniCommesse(this.session.get('IDCOMMESSA')).subscribe(response =>{this.anni = response 
        console.log(this.anni)})
    this.inserisci.getMesi().subscribe(response=>{​​​​ this.mesi = response}​​​​)
    this.inserisci.getTipiAvanzamento().subscribe(response=>{this.tipiavanzamenti=response })
  }

  annoChanged(anno : Anno)
 {
   this.anno = anno
   this.aggiornatab()
 }

 tipoavanzamentoChanged(tipoavanzamento : TipoAvanzamento)
 {
  if(tipoavanzamento.id_tipo_avanzamento!=null)
  {
    this.b=tipoavanzamento.id_tipo_avanzamento
    console.log(this.b)
    this.aggiornatab()
  }
 }
 
 aggiornatab()
 {
  if(this.anno!=null &&this.tipoavanzamento!=null)
  {
    this.inserisci.getAttivitaCommessaByType(this.a,this.b).subscribe(response=>{ this.attivitas=response});
    console.log(this.attivitas)
  }
 
 }
 

}
