import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit , ViewChild } from '@angular/core';
import { Avanzamento, TipoAvanzamento } from '../inseriscitask/inseriscitask.component';
import { InserimentoService } from '../services/inserimento.service';
import { Mese,Task,Anno } from '../inseriscitask/inseriscitask.component';
import { Attivita } from '../assegnatask/assegnatask.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modificaavanzamento',
  templateUrl: './modificaavanzamento.component.html',
  styleUrls: ['./modificaavanzamento.component.css']
})
export class ModificaavanzamentoComponent implements OnInit {

 
  
  constructor(private inserisci : InserimentoService, private activatedroute : ActivatedRoute) { }
  avan : Avanzamento[] =[]
  avanzamenti : Avanzamento [] = []
  avanzamento : Avanzamento = new Avanzamento
  mese: Mese = new Mese
  task: Task = new Task
  attivita: Attivita = new Attivita

  tipoAvanzamento : TipoAvanzamento = new TipoAvanzamento


  a : number = 0
  b:number = 0

  commessaid : string | null = ''


  dataSource = new MatTableDataSource(this.avanzamenti);
  displayedColumns: string[] = ['cod', 'nome', 'mese', 'anno', 'percentuale', 'valore', "getdetails"]
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngOnInit(): void 
  {
    this.activatedroute.data.subscribe(data => { 
      switch(data.kind)
      {
        case('task') :
        {
          this.tipoAvanzamento.id_tipo_avanzamento = 1
          this.tipoAvanzamento.nome = "Task"
          console.log('task')
          break;
        }
        case('ricavi') :
        {
          this.tipoAvanzamento.id_tipo_avanzamento = 2 
          this.tipoAvanzamento.nome = "Ricavi"
          console.log('ricavi')
          break;
        }
        case('previsionericavi') :
        {
          this.tipoAvanzamento.id_tipo_avanzamento = 3 
          this.tipoAvanzamento.nome = "Previsione ricavi"
          console.log('previsionericavi')
          break;
        }
        case('previsionetask') :
        {
          this.tipoAvanzamento.id_tipo_avanzamento = 4
          this.tipoAvanzamento.nome = "Previsione task"
          console.log('previsionetask')
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
    })
    this.messaggio = this.messaggiolocale
    this.modify=false
  }
  

}