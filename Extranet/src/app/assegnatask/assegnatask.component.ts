import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';


import { Task } from '../inseriscitask/inseriscitask.component';
import { TipoUsoRisorse } from '../preventivorisorse/preventivorisorse.component';
import { Commessa } from '../selezionacommessa/selezionacommessa.component';
import { InserimentoService } from '../services/inserimento.service';

export class Attivita
{
  task : Task = new Task 
  constructor(
    public id? : number | null,
    task? : Task | null,   //tipo task
    public commessa? : Commessa | null, //tipo commessa
    public valore? : number | null
  ){}
}

@Component({
  selector: 'app-assegnatask',
  templateUrl: './assegnatask.component.html',
  styleUrls: ['./assegnatask.component.css']
})
export class AssegnataskComponent implements OnInit {
  idcommessa : String | null =''
  constructor(private inserisci : InserimentoService,private route : Router) { }
  tasks : Task [] = []
  attivitas : Attivita [] =[]
  attivita : Attivita = new Attivita
  attivita1 : Attivita = new Attivita
  a : number = 0

  tipoUsoRisorse : TipoUsoRisorse = new TipoUsoRisorse
  bool : boolean = true

  task : Task = new Task

  ngOnInit(): void 
  {
    
    //prendo id commessa dal session storage e cerco nel db l'oggetto che passo a attivita.commessa

      this.idcommessa = sessionStorage.getItem("idcommessa")
      if(this.idcommessa!=null)
      {
         this.a  = +this.idcommessa
         console.log("ID Commessa nello storage"+this.a)
         //passare get a 
         this.inserisci.getCommessaId(this.a).subscribe(response=>{
         this.attivita.commessa=response
         })
         if(this.attivita.commessa!=null)
         {
          console.log("ID Commessa "+this.attivita.commessa.idcommessa)
         }
      }
    

    this.inserisci.getTasks().subscribe(response=>{this.tasks=response})
    this.inserisci.getCommessaAttivita(this.a).subscribe(response=>{this.attivitas=response;})
      
  }

  taskChanged(taska : Task)
  {
    for(let i= 0;i<this.attivitas.length;i++)
    {
      console.log(this.attivitas[i].task?.id_task+" "+this.attivitas[i].task?.nome)
      console.log(taska.id_task+" "+taska.nome)
      if(this.attivitas[i].task?.id_task===taska.id_task)
      {
        this.bool=false;
        break;
      }
      else
      {
       this.bool=true;
       
        
      }
    }
    if(this.bool==false)
    {
      window.alert("attivita già inserita")
      window.location.reload()
    }
    else
    {
      window.alert("attivita nuova")
      this.attivita.task=taska
     
    }
    console.log(taska.id_task)
    console.log(taska.nome)
  }

  inserisciattivita()
  {
    


    //seleziono task da array in ingresso e inserisco in attivita.task
    
    console.log("ID Task "+this.task.id_task) 

      for(let i=0;i<this.tasks.length;i++)
      {
         if(this.tasks[i].id_task==this.task.id_task)
         this.attivita.task=this.tasks[i]
      }
      this.inserisci.setAttivita(this.attivita).subscribe(response=>{})
      this.inserisci.getCommessaAttivita(this.a).subscribe(response=>{this.attivitas=response;})
      window.location.reload()
  }
  assegnarisorseerogate()
  {
    sessionStorage.setItem('tipoUsoRisorse', '1')
    this.route.navigate(['assegnarisorsepreventivate'])
  }
  assegnarisorsepreventivate()
  {
    sessionStorage.setItem('tipoUsoRisorse', '2')
    this.route.navigate(['assegnarisorsepreventivate'])
  }

}
