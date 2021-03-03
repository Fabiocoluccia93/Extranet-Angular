import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Attivita, Mese, Risorse, Usorisorse } from '../classi/ClassiGenerali';

import { InserimentoService } from '../services/inserimento.service';


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
