import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Anno, Attivita, Avanzamento, Mese, TipoAvanzamento } from '../classi/ClassiGenerali';
import { InserimentoService } from '../services/inserimento.service';



@Component({
  selector: 'app-inseriscitask',
  templateUrl: './inseriscitask.component.html',
  styleUrls: ['./inseriscitask.component.css']
})
export class InseriscitaskComponent implements OnInit {

  constructor(private inserisci : InserimentoService,public activatedroute:ActivatedRoute) { }
  attivitas : Attivita[] = []
  mesi : Mese[] = []
  anni : Anno[]= []

  percentuale : number | null = 0

  mese : Mese = new Mese
  anno:Anno=new Anno
  attivita : Attivita = new Attivita

  a : number = 0

  idtask? : number |null
  idmese? : number |null

  idcommessa : String | null =''

  messaggio : string | null = 'messaggio'
  messaggiolocale : string | null = ''

  

  //insertloc = false
  insert =   true
  modify = false

  tipoAvanzamento : TipoAvanzamento = new TipoAvanzamento

  avanzamento : Avanzamento = new Avanzamento//(null,null,null,null,null)
  ngOnInit(): void 
  {
    this.idcommessa = sessionStorage.getItem("idcommessa")
    if(this.idcommessa!=null)
    {
       this.a  = +this.idcommessa
       this.inserisci.getCommessaAttivita(this.a).subscribe(response=>{
       this.attivitas=response
       })
       if(this.attivita.commessa!=null)
       {
        console.log("ID Commessa "+this.attivita.commessa.id_commessa)
       }
   
       this.inserisci.getAnni().subscribe(response=>{this.anni=response;})
    this.inserisci.getMesi().subscribe(response=>{this.mesi=response;})
  }
 }

  meseChanged(mese : Mese)
  {
    this.avanzamento.mese = mese
  }

  annoChanged(anno : Anno)
  {
    this.avanzamento.anno = anno
  }

  attivitaChanged(attivita : Attivita)
  {
    this.avanzamento.attivita = attivita
  }

  inserisce()
  {
       if(this.percentuale!=null && this.percentuale>=0 && this.percentuale<=100)
       {
        this.avanzamento.percentuale=this.percentuale
       }
       else
       {
         window.alert("percentuale errata")
       }
       
       this.inserisci.setAvanzamento(this.avanzamento).subscribe(response =>{ 
       this.messaggiolocale=response
       if(this.messaggiolocale == "modifica" )
       {
        this.messaggio =  "Attivita già inserita se vuoi eseguire la modifica premi il tasto modifica"
       }
       else
       {
        this.messaggio = this.messaggiolocale
       }
             })  
            
            
            

  
}}


