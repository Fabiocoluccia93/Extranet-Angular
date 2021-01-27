import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../inseriscitask/inseriscitask.component';
import { Commessa } from '../selezionacommessa/selezionacommessa.component';
import { InserimentoService } from '../services/inserimento.service';

export class Attivita
{
  constructor(
    public id? : number | null,
    public task? : Task | null,   //tipo task
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
  attivita : Attivita = new Attivita
  a : number = 0
  ngOnInit(): void 
  {
    if(this.idcommessa!=null)
    {
      this.idcommessa = sessionStorage.getItem("idcommessa")
      if(this.idcommessa!=null)
      {
         this.a  = +this.idcommessa
         //passare get a 
         this.inserisci.getCommessaId(this.a).subscribe(response=>{
          this.attivita.commessa=response
         })
         if(this.attivita.commessa!=null)
         {
         console.log("ID Commessa "+this.attivita.commessa.idcommessa)
        }
      }
    }
    this.inserisci.getTasks().subscribe(response=>{this.tasks=response;})
  }

  inserisciattivita()
  {
   this.inserisci.setAttivita(this.attivita).subscribe(response=>{})
  }
  assegnarisorseerogate()
  {
    this.route.navigate(['assegnarisorseerogate'])
  }
  assegnarisorsepreventivate()
  {
    this.route.navigate(['assegnarisorsepreventivate'])
  }

}
