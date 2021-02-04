import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Avanzamento } from '../inseriscitask/inseriscitask.component';
import { InserimentoService } from '../services/inserimento.service';
import { Mese,Task } from '../inseriscitask/inseriscitask.component';
import { Attivita } from '../assegnatask/assegnatask.component';

@Component({
  selector: 'app-modificaavanzamento',
  templateUrl: './modificaavanzamento.component.html',
  styleUrls: ['./modificaavanzamento.component.css']
})
export class ModificaavanzamentoComponent implements OnInit {

 
  
  constructor(private inserisci : InserimentoService) { }
  avan : Avanzamento[] =[]
  avanzamenti : Avanzamento [] = []
  avanzamento : Avanzamento = new Avanzamento
  mese: Mese = new Mese
  task: Task = new Task
  attivita: Attivita = new Attivita


  a : number = 0
  commessaid : string | null = ''
  ngOnInit(): void 
  {
    
    this.commessaid = sessionStorage.getItem("idcommessa")
    console.log("id commessa storage"+sessionStorage.getItem("idcommessa"))
    if(this.commessaid!= null )
    {
      this.a = +this.commessaid
      console.log("id commessa"+this.a)
        
    }
    this.inserisci.getAvanzamentoByCommessa(this.a).subscribe(response=>{this.avanzamenti=response})
  }

  modavanzamento(avanzamento : Avanzamento)
  {
    console.log(avanzamento.anno?.numero)
  }

  
  

}
