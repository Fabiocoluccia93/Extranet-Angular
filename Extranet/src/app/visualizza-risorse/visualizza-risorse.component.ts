import { Component, Input, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Anno, Mese, Risorse } from '../classi/ClassiGenerali';
import { InserimentoService } from '../services/inserimento.service';

@Component({
  selector: 'app-visualizza-risorse',
  templateUrl: './visualizza-risorse.component.html',
  styleUrls: ['./visualizza-risorse.component.css']
})
export class VisualizzaRisorseComponent implements OnInit {

  constructor(public inserisci : InserimentoService, private session: SessionStorageService) { }

  @Input()
  b: number = 0;

  commessaid : string | null = ''
  a : number = 0

  mesi : Mese [] = []
 anni : Anno[]= []
 risorses : Risorse[]=[]

 anno:Anno=new Anno
  ngOnInit(): void 
  {
    this.commessaid = this.session.get('IDCOMMESSA')
    this.inserisci.getRisorseCommessaByType(this.session.get('IDCOMMESSA'),this.b).subscribe(response=>{ this.risorses=response});
    console.log(this.risorses)
    this.inserisci.getAnniCommesse(this.session.get('IDCOMMESSA')).subscribe(response =>{this.anni = response 
      console.log(this.anni)})
    this.inserisci.getMesi().subscribe(response=>{this.mesi=response;})
  }

  annoChanged(anno : Anno)
 {
   this.anno = anno
 }
}
