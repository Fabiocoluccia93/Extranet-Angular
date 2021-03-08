import { Component, Input, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Anno, Attivita, Avanzamento, Mese } from '../classi/ClassiGenerali';
import { InserimentoService } from '../services/inserimento.service';

@Component({
  selector: 'app-visualizza-avanzamento',
  templateUrl: './visualizza-avanzamento.component.html',
  styleUrls: ['./visualizza-avanzamento.component.css']
})
export class VisualizzaAvanzamentoComponent implements OnInit {

  constructor(public inserisci : InserimentoService, private session: SessionStorageService) { }

 
  @Input()
  b: number = 0;

  commessaid : string | null = ''
  a : number = 0
  
 attivitas : Attivita[] = []
 mesi : Mese [] = []
 
 anni : Anno[]= []

 anno:Anno=new Anno

 
  ngOnInit(): void
  {

    this.commessaid = sessionStorage.getItem("idcommessa")
    console.log("id commessa storage"+sessionStorage.getItem("idcommessa"))
    if(this.commessaid!= null )
    {
      this.a = +this.commessaid
      console.log("id commessa"+this.a)
    }
    this.inserisci.getAttivitaCommessaByType(this.a,this.b).subscribe(response=>{ this.attivitas=response});
      console.log(this.attivitas)
    
      this.inserisci.getAnniCommesse(this.session.get('IDCOMMESSA')).subscribe(response =>{this.anni = response 
        console.log(this.anni)})
    this.inserisci.getMesi().subscribe(response=>{​​​​ this.mesi = response}​​​​)
  }

  annoChanged(anno : Anno)
 {
   this.anno = anno
 }


}
