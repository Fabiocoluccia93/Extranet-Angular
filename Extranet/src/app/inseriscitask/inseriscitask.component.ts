import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public mese? : number | null ,
    public attivita? : number  | null,
    public valore? : number  | null,
    public percentuale? : number  | null,
    public tipo? : number  | null,
  ){}
}

@Component({
  selector: 'app-inseriscitask',
  templateUrl: './inseriscitask.component.html',
  styleUrls: ['./inseriscitask.component.css']
})
export class InseriscitaskComponent implements OnInit {

  constructor(private inserimento : InserimentoService,private activatedroute:ActivatedRoute) { }
  tasks : Task[]=[]
  mesi : Mese[] = []
  avanzamento : Avanzamento = new Avanzamento//(null,null,null,null,null)
  ngOnInit(): void 
  {
    
    this.activatedroute.data.subscribe(data => {this.avanzamento.tipo=data.tipologia;
  })
    this.inserimento.getTasks().subscribe(response=>{this.tasks=response;})
    this.inserimento.getMesi().subscribe(response1=>{this.mesi=response1;})
  }

  inserisce()
  {
    
       if(this.avanzamento.percentuale!=null && this.avanzamento.percentuale>=0 && this.avanzamento.percentuale<=100)
       {
        window.alert(this.avanzamento.mese)
        window.alert(this.avanzamento.attivita)
        window.alert(this.avanzamento.percentuale)
        window.alert(this.avanzamento.tipo)
       }
       else
       {
        window.alert("false control")
       }
         
  }
}


