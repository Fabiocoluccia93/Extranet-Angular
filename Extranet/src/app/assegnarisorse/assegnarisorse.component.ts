import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Attivita } from '../assegnatask/assegnatask.component';
import { Mese } from '../inseriscitask/inseriscitask.component';
import { InserimentoService } from '../services/inserimento.service';

export class Usorisorse
{
  constructor(
    public mesa? : Mese | null,
    public risorsa? : Risorse | null,
    public ore? : number |null,
    public ricavi? : number | null,
    public costi? : number | null,
    public tiporisorsa? : TipoRisorse | null
  )  {  }
}

export class Risorse
{
  constructor(
    public id_risorse? : number | null,
    public nome? : string | null,
    public tariffa? : number | null
  ){}
}

export class TipoRisorse
{
  constructor(
    public id_uso_risorse? : number | null,
    public nome? : string | null
  ){}
}

@Component({
  selector: 'app-assegnarisorse',
  templateUrl: './assegnarisorse.component.html',
  styleUrls: ['./assegnarisorse.component.css']
})
export class AssegnarisorseComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,private inserisci : InserimentoService) { }
  usorisorse : Usorisorse = new Usorisorse
  
  attivitas : Attivita[]= []
  mesi : Mese[] = []
  risorse : Risorse[] = []
  

  ngOnInit(): void 
  {
    this.activatedroute.data.subscribe(data => {this.usorisorse.tiporisorsa=data.tipologia; })
    this.inserisci.getMesi().subscribe(response=>{this.mesi=response;})
    this.inserisci.getRisorse().subscribe(response=>{this.risorse=response;})
  }

  inseriscirisorse()
  {

  }

}
