import { Component, OnInit } from '@angular/core';
import { Attivita } from '../assegnatask/assegnatask.component';
import { Mese } from '../inseriscitask/inseriscitask.component';
import { InserimentoService } from '../services/inserimento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Commessa } from '../selezionacommessa/selezionacommessa.component';




export class UsoRisorse
{
  
  constructor(
   public id? :number | null,
   public costi? : number | null,
   public ricavi? : number | null,
   public commessa? : Commessa | null,
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

  constructor(private inserisci : InserimentoService,private  activatedroute : ActivatedRoute,private route : Router) { }

  // attivitas : Attivita [] = []
  mesi : Mese [] = []
  risorse : Risorsa [] = []

  messaggio: string = "messaggio"
  // attivita : Attivita = new Attivita
 
  mese : Mese = new Mese
  risorsa : Risorsa = new Risorsa
  tipoUsoRisorse : TipoUsoRisorse = new TipoUsoRisorse
  usoRisorse : UsoRisorse = new UsoRisorse
  commessa1 : Commessa = new Commessa

  // attivita1 : Attivita = new Attivita
  mese1 : Mese = new Mese
  risorsa1 : Risorsa = new Risorsa

  idcommessa : string | null = ''
  idtipousorisorse : string | null =''
  a : number = 0

  

  ngOnInit(): void 
  { 
    this.activatedroute.data.subscribe(data => { 
      switch(data.kind)
      {
        case('preventivate') :
        {
          this.tipoUsoRisorse.id_tipo_usorisorse=1
          this.tipoUsoRisorse.nome='Preventivo'
          break;
        }
        case('erogate'):
        {
          this.tipoUsoRisorse.id_tipo_usorisorse=2
          this.tipoUsoRisorse.nome='Erogate'
          break;
        }
      }
    })
     this.usoRisorse.tipoUsoRisorse=this.tipoUsoRisorse

    this.idcommessa = sessionStorage.getItem("idcommessa")
    console.log("commessa in preventivorisorse"+sessionStorage.getItem("idcommessa"))
    if(this.idcommessa!=null)
    {
      this.a= +this.idcommessa
     
      this.inserisci.getCommessaId(this.a).subscribe(response=>{
        this.commessa1=response 
       
      })
       
      

     
      // this.inserisci.getCommessaAttivita(this.a).subscribe(response=>{this.attivitas=response;})
    }
   
     
      
    //console.log("ID Commessa usorisorse "+this.usoRisorse.commessa.id_commessa)
    this.inserisci.getMesi().subscribe(response=>{this.mesi=response})
    this.inserisci.getRisorse().subscribe(response=>{this.risorse=response})
    
  }

  // attivitaChanged(attivita2 : Attivita)
  // {
  //  this.usoRisorse.attivita = attivita2;
  // }


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
    this.usoRisorse.commessa=this.commessa1
    
    if(this.usoRisorse.mese==null || this.usoRisorse.risorse==null || this.usoRisorse.ore==null)
    {
      window.alert("tutti i dati sono obligatori")
    }
    else
    {
      this.inserisci.setUsoRisorse(this.usoRisorse).subscribe(response=>{this.messaggio=response})
    }
  }
  assegnarisorsepreventivate()
  {
    //sessionStorage.setItem('tipoUsoRisorse', '2')
    this.route.navigate(['assegnarisorsepreventivate'])
  }
}
