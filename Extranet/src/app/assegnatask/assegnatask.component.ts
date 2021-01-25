import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../inseriscitask/inseriscitask.component';
import { Commessa } from '../selezionacommessa/selezionacommessa.component';
import { InserimentoService } from '../services/inserimento.service';

export class Attivita
{
  constructor(
    public task? : number | null,   //tipo task
    public commessa? : number | null, //tipo commessa
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
  
  ngOnInit(): void 
  {
    if(this.idcommessa!=null)
    {
      this.idcommessa = sessionStorage.getItem("idcommessa")
      if(this.idcommessa!=null)
      {
         this.attivita.commessa = + this.idcommessa
      }
    }
    this.inserisci.getTasks().subscribe(response=>{this.tasks=response;})
  }

  inserisciattivita()
  {
   this.inserisci.setAttivita(this.attivita).subscribe(response=>{})
  }
  assegnarisorse()
  {
    this.route.navigate(['assegnarisorse'])
  }

}
