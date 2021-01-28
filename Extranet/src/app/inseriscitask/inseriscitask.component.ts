import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Attivita } from '../assegnatask/assegnatask.component';
import { InserimentoService } from '../services/inserimento.service';


export class Task
{
    constructor(
    public id? : number, 
    public nome? : string
    ) {}
}

export class Mese
{
  constructor(
    public id? : number,
    public nome? : string
  ){}
}

export class Avanzamento
{
  constructor(
    public mese? : Mese | null ,
    public attivita? : Attivita  | null,
    public valore? : number  | null,
    public percentuale? : number  | null,
    public tipo? : number | null,
  ){}
}

@Component({
  selector: 'app-inseriscitask',
  templateUrl: './inseriscitask.component.html',
  styleUrls: ['./inseriscitask.component.css']
})
export class InseriscitaskComponent implements OnInit {

  constructor(private inserimento : InserimentoService,private activatedroute:ActivatedRoute) { }
  tasks : Task[] = []
  mesi : Mese[] = []

  mese : Mese = new Mese
  i : number = 0

  idtask? : number |null
  idmese? : number |null

  avanzamento : Avanzamento = new Avanzamento//(null,null,null,null,null)
  ngOnInit(): void 
  {
    this.activatedroute.data.subscribe(data => {this.avanzamento.tipo=data.tipologia})
    this.inserimento.getTasks().subscribe(response=>{this.tasks=response;})
    this.inserimento.getMesi().subscribe(response1=>{this.mesi=response1;})
  }

  inserisce()
  {
       if(this.avanzamento.percentuale!=null && this.avanzamento.percentuale>=0 && this.avanzamento.percentuale<=100)
       {
         
         for(let i=0;i<this.mesi.length;i++)
         {
            if(this.mesi[i].id==this.idmese)
            this.avanzamento.mese=this.mesi[i]
         }
         for(let i=0;i<this.tasks.length;i++)
         {
            if(this.tasks[i].id==this.idtask)
            this.avanzamento.attivita=this.tasks[i]
         }

          window.alert(this.avanzamento.mese)
          window.alert(this.avanzamento.attivita)
          window.alert(this.avanzamento.percentuale)
          window.alert(this.avanzamento.tipo)
          this.inserimento.setAvanzamento(this.avanzamento).subscribe()
       }
       else
       {
          window.alert("false control")
       }
         
  }

  
}


