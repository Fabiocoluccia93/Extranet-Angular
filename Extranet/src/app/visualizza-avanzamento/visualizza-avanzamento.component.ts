import { Component, OnInit } from '@angular/core';
import { Attivita, Avanzamento, Mese } from '../classi/ClassiGenerali';
import { InserimentoService } from '../services/inserimento.service';

@Component({
  selector: 'app-visualizza-avanzamento',
  templateUrl: './visualizza-avanzamento.component.html',
  styleUrls: ['./visualizza-avanzamento.component.css']
})
export class VisualizzaAvanzamentoComponent implements OnInit {

  constructor(public inserisci : InserimentoService) { }


  commessaid : string | null = ''
  a : number = 0
  b : number = 2 //mockato su ricavi
 attivitas : Attivita[] = []
 mesi : Mese [] = []
 
  ngOnInit(): void
  {

    this.commessaid = sessionStorage.getItem("idcommessa")
    console.log("id commessa storage"+sessionStorage.getItem("idcommessa"))
    if(this.commessaid!= null )
    {
      this.a = +this.commessaid
      console.log("id commessa"+this.a)
    }
    this.inserisci.getCommessaAttivita(this.a).subscribe(response=>{this.attivitas=response
      console.log(this.attivitas)})
    this.inserisci.getMesi().subscribe(response=>{​​​​ this.mesi = response}​​​​)
  }

}
