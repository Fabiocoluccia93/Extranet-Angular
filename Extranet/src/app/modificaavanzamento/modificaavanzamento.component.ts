import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit , ViewChild } from '@angular/core';
import { InserimentoService } from '../services/inserimento.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Anno, Attivita, Avanzamento, Commessa, Mese, TipoAvanzamento } from '../classi/ClassiGenerali';


@Component({
  selector: 'app-modificaavanzamento',
  templateUrl: './modificaavanzamento.component.html',
  styleUrls: ['./modificaavanzamento.component.css']
})
export class ModificaavanzamentoComponent implements OnInit {

 
  
  constructor(private inserisci : InserimentoService, private activatedroute : ActivatedRoute, private session : SessionStorageService) { }
  avan : Avanzamento[] =[]
  avanzamenti : Avanzamento [] = []
  avanzamento : Avanzamento = new Avanzamento
  mese: Mese = new Mese
  attivita: Attivita = new Attivita

  tipoAvanzamento : TipoAvanzamento = new TipoAvanzamento


  a : number = 0
  b:number = 0

  commessaid : string | null = ''


  dataSource = new MatTableDataSource(this.avanzamenti);
  displayedColumns: string[] = ['cod', 'nome', 'mese', 'anno', 'percentuale', 'valore','fattura', "getdetails","consolida"]
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  tipo23 : boolean = true
  fattura : boolean = false
titolo : string =''
commessa : Commessa = new Commessa
  ngOnInit(): void 
  {
    if(this.session.get('TIPOLOGIA') == "utente")
    {
      this.displayedColumns = ['cod', 'nome', 'mese', 'anno', 'percentuale', 'valore']
    }



    this.activatedroute.data.subscribe(data => { 
      switch(data.kind)
      {
        case('task') :
        {
          this.tipoAvanzamento.id_tipo_avanzamento = 1
          this.tipoAvanzamento.nome = "Task"
          console.log('task')
          this.tipo23=true
          this.fattura=false
          this.titolo="Stato di avanzamento task di"
          break;
        }
        case('ricavi') :
        {
          this.tipoAvanzamento.id_tipo_avanzamento = 2 
          this.tipoAvanzamento.nome = "Ricavi"
          this.percentuale=100
          this.tipo23=false
          this.fattura=true
          console.log('ricavi')
          this.titolo="Ricavi delle Task di"
          break;
        }
        case('previsionericavi') :
        {
          this.tipoAvanzamento.id_tipo_avanzamento = 3 
          this.tipoAvanzamento.nome = "Previsione ricavi"
          console.log('previsionericavi')
          this.titolo="Previsione dei ricavi di"
          this.percentuale=100
          this.tipo23=false
          this.fattura=false
          break;
        }
        case('previsionetask') :
        {
          this.tipoAvanzamento.id_tipo_avanzamento = 4
          this.tipoAvanzamento.nome = "Previsione task"
          this.tipo23=true
          this.fattura=false
          console.log('previsionetask')
          this.titolo="Previsione avanzamento task di"
          break;
        }
      }
    })
    this.commessaid = sessionStorage.getItem("idcommessa")
    console.log("id commessa storage"+sessionStorage.getItem("idcommessa"))
    if(this.commessaid!= null )
    {
      this.a = +this.commessaid
      console.log("id commessa"+this.a)
    }
    if(this.tipoAvanzamento.id_tipo_avanzamento!=null)
    {
      this.b=this.tipoAvanzamento.id_tipo_avanzamento
    }
    this.inserisci.getCommessaId(this.a).subscribe(response=>{this.commessa=response})
    
    this.inserisci.getAvanzamentoByCommessaType(this.a,this.b).subscribe(response=>{this.avanzamenti=response
      this.dataSource.data = this.avanzamenti;
      console.log(this.avanzamenti)
    })
    this.dataSource.paginator = this.paginator 
  }

  attivitas : Attivita[] = []
  mesi : Mese[] = []
  anni : Anno[]= []


  anno:Anno=new Anno
 

  percentuale : number | null = 0
  
  messaggio : string | null = ''
  messaggiolocale : string | null = ''
  divinsert : boolean = false
  
  /**************************form di inserimento*****************************/
  inserimentoAvanzamento()
  {
    this.modify=false
    this.divinsert = true
    if(this.commessaid!=null)
    {
       this.a  = +this.commessaid
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

nfattura : string =''

  inserisce()
  {
    this.avanzamento.tipoAvanzamento=this.tipoAvanzamento
       if(this.percentuale!=null && this.percentuale>=0 && this.percentuale<=100)
       {
        this.avanzamento.percentuale=this.percentuale
       }
       else
       {
         window.alert("percentuale errata")
       }
       if(this.avanzamento.tipoAvanzamento.id_tipo_avanzamento==2)
       {
        this.avanzamento.consolida = new Date
         this.avanzamento.fattura=this.nfattura
       }
       this.inserisci.setAvanzamento(this.avanzamento).subscribe(response =>
      { 
        this.messaggiolocale=response
        
        if(this.messaggiolocale == "modifica" )
        {
          
          this.messaggio =  "Attivita già inserita se vuoi eseguire la modifica premi il tasto modifica"
        }
        else
        {
          this.messaggio = this.messaggiolocale
          this.divinsert = false
          this.inserisci.getAvanzamentoByCommessaType(this.a,this.b).subscribe(response=>{this.avanzamenti=response
            this.dataSource.data = this.avanzamenti;})
            setTimeout("location.reload(true);",1000)
        }    
      }) 
  }
  /***************************************************************************************************/
  avanzamentomod :Avanzamento = new Avanzamento
  modify : boolean = false
  modificaAvanzamento(avanzamento : Avanzamento)
  {
    this.divinsert = false
    this.modify=true
    this.avanzamentomod=avanzamento
  }

  modifica()
  {
    this.inserisci.modAvanzamento(this.avanzamentomod).subscribe(response=>{
      this.messaggiolocale=response
      this.messaggio = this.messaggiolocale
      setTimeout("location.reload(true);",1000)
    })
    
    this.modify=false
  }

  consolidaav : Avanzamento = new Avanzamento
  consolida(avanzamento : Avanzamento)
  {
    avanzamento.consolida = new Date
    console.log(avanzamento.consolida)
    this.consolidaav = avanzamento
    this.inserisci.consolidaav(this.consolidaav).subscribe(response=>{this.messaggio=response})
  }
  

}