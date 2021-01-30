import { Component, OnInit } from '@angular/core';
import { Attivita } from '../assegnatask/assegnatask.component';
import { Mese } from '../inseriscitask/inseriscitask.component';
import { InserimentoService } from '../services/inserimento.service';
import { ActivatedRoute, Router } from '@angular/router';



export class UsoRisorse
{
  
  constructor(
   public id? :number | null,
   public costi? : number | null,
   public ricavi? : number | null,
   public attivita? : Attivita | null,
   public ore? : number | null,
   public mese? : Mese | null,
   public risorse? : Risorsa | null,
   public tipoUsoRisorse? : TipoUsoRisorse | null,
  ){}
}

export class TipoUsoRisorse
{
  constructor(
  public id_tipo_usorisorse? : number | null,
  public nome? : string | null
  ){}
}


export class Risorsa
{
  
    id_risorse? : number | null
    nome? : string | null
    tariffa? : number | null
 
}

@Component({
  selector: 'app-preventivorisorse',
  templateUrl: './preventivorisorse.component.html',
  styleUrls: ['./preventivorisorse.component.css']
})
export class PreventivorisorseComponent implements OnInit {

  constructor(private inserisci : InserimentoService,private  route : ActivatedRoute) { }

  attivitas : Attivita [] = []
  mesi : Mese [] = []
  risorse : Risorsa [] = []

  attivita : Attivita = new Attivita
  mese : Mese = new Mese
  risorsa : Risorsa = new Risorsa
  tipoUsoRisorse : TipoUsoRisorse = new TipoUsoRisorse
  usoRisorse : UsoRisorse = new UsoRisorse

  attivita1 : Attivita = new Attivita
  mese1 : Mese = new Mese
  risorsa1 : Risorsa = new Risorsa

  idcommessa : string | null = ''
  idtipousorisorse : string | null =''
  a : number | null = 0

  

  ngOnInit(): void 
  { 
    
    
      this.idtipousorisorse = sessionStorage.getItem('tipoUsoRisorse')
      if(this.idtipousorisorse!= null)
      {
        this.a = +this.idtipousorisorse
        console.log("tipo uso risorse"+this.a)
        this.inserisci.getTipoUsoRisorse(this.a).subscribe(response=>{this.usoRisorse.tipoUsoRisorse=response})
        //this.usoRisorse.tipoUsoRisorse = this.tipoUsoRisorse
        
        if(this.usoRisorse.tipoUsoRisorse!=null)
        {
          console.log("tipo uso risorse id: "+this.usoRisorse.tipoUsoRisorse.id_tipo_usorisorse)
          console.log("tipo uso risorse nome:  "+this.usoRisorse.tipoUsoRisorse.nome)
        }
        
      }
    
    
    
    
    

    
    this.idcommessa = sessionStorage.getItem('idcommessa')
    if(this.idcommessa!=null)
    {
      this.a = +this.idcommessa
      console.log("ID Commessa nello storage"+this.a)
      //passare get a 
      this.inserisci.getCommessaId(this.a).subscribe(response=>{this.attivita.commessa=response})
      this.inserisci.getCommessaAttivita(this.a).subscribe(response=>{this.attivitas=response;})
    }
   
    this.inserisci.getMesi().subscribe(response=>{this.mesi=response})
    this.inserisci.getRisorse().subscribe(response=>{this.risorse=response})
  }

  attivitaChanged(attivita2 : Attivita)
  {
   this.usoRisorse.attivita = attivita2;
  }

  meseChanged(mese2 : Mese)
  {
   this.usoRisorse.mese = mese2
  }

  risorsaChanged(risorsa2 : Risorsa)
  {
    this.usoRisorse.risorse = risorsa2
  }

  inseriscirisorse()
  {


    if(this.usoRisorse.attivita==null || this.usoRisorse.mese==null || this.usoRisorse.risorse==null || this.usoRisorse.ore==null)
    {
      window.alert("tutti i dati sono obligatori")
    }
    else
    {
      this.inserisci.setUsoRisorse(this.usoRisorse).subscribe(response=>{})
    }
  }
}
