import { Component, OnInit, ViewChild } from '@angular/core';
import { InserimentoService } from '../services/inserimento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SessionStorageService } from 'angular-web-storage';
import { Anno, Commessa, Mese, Risorsa, TipoUsoRisorse, UsoRisorse } from '../classi/ClassiGenerali';

@Component({
  selector: 'app-preventivorisorse',
  templateUrl: './preventivorisorse.component.html',
  styleUrls: ['./preventivorisorse.component.css']
})
export class PreventivorisorseComponent implements OnInit {

  constructor(private inserisci : InserimentoService,private  activatedroute : ActivatedRoute,private route : Router , private session: SessionStorageService) { }

  b : number = 0

 
  usorisorse2 : UsoRisorse[] = []
  anni: Anno[] =[]
  mesi : Mese [] = []
  risorse : Risorsa [] = []

  messaggio: string = ""
  // attivita : Attivita = new Attivita
 
  anno : Anno = new Anno
  mese : Mese = new Mese
  risorsa : Risorsa = new Risorsa
  tipoUsoRisorse : TipoUsoRisorse = new TipoUsoRisorse
  usoRisorse : UsoRisorse = new UsoRisorse

  commessa : Commessa = new Commessa

  // attivita1 : Attivita = new Attivita
  mese1 : Mese = new Mese
  risorsa1 : Risorsa = new Risorsa
  
  idcommessa : string | null = ''
  idtipousorisorse : string =''
  a : number = 0

  titolo : string =''
  usorisorse : UsoRisorse[] = []
  dataSource = new MatTableDataSource(this.usorisorse);
  displayedColumns: string[] = ['cod', 'nome', 'mese', 'anno', 'figura', 'ore', 'costi', 'ricavi', 'getdetails',"consolida"]
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  type : number = 0
  // attivitas : Attivita [] = []
  
  ngOnInit(): void 
  { 

    if(this.session.get('TIPOLOGIA') == "utente")
    {
      this.displayedColumns = ['cod', 'nome', 'mese', 'anno', 'figura', 'ore', 'costi', 'ricavi']
    }

    this.activatedroute.data.subscribe(data => { 
      switch(data.kind)
      {
        case('preventivate') :
        {
          this.type=1
          this.tipoUsoRisorse.id_tipo_usorisorse=1
          this.tipoUsoRisorse.nome='Preventivo'
          this.titolo="Figure professionali preventivate per"
          break;
        }
        case('erogate'):
        {
          this.type=2
          this.tipoUsoRisorse.id_tipo_usorisorse=2
          this.tipoUsoRisorse.nome='Erogate'
          this.titolo="Figure professionali erogate per"
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
        this.commessa=response 
       
      })
       
      

     
      // this.inserisci.getCommessaAttivita(this.a).subscribe(response=>{this.attivitas=response;})
    }
   
     
      
    //console.log("ID Commessa usorisorse "+this.usoRisorse.commessa.id_commessa)
    this.inserisci.getAnni().subscribe(response=>{this.anni=response})
    this.inserisci.getMesi().subscribe(response=>{this.mesi=response})
    this.inserisci.getRisorseActive().subscribe(response=>{this.risorse=response})
    console.log("id commessa "+this.a)
    
    if(this.tipoUsoRisorse?.id_tipo_usorisorse!=null)
    {
      this.b = this.tipoUsoRisorse?.id_tipo_usorisorse
      console.log("tipo uso risorse :"+this.tipoUsoRisorse.id_tipo_usorisorse)

      this.inserisci.getUsoRisorse(this.a,this.b).subscribe(response=>{this.usorisorse=response
        this.dataSource.data = this.usorisorse;})
     
    }
    
      this.dataSource.paginator = this.paginator 
   
  }

  // attivitaChanged(attivita2 : Attivita)
  // {
  //  this.usoRisorse.attivita = attivita2;
  // }


  meseChanged(mese2 : Mese)
  {
   this.usoRisorse.mese = mese2
  }

  annoChanged(anno : Anno)
  {
   this.usoRisorse.anno = anno
  }

  risorsaChanged(risorsa2 : Risorsa)
  {
    this.usoRisorse.risorse = risorsa2
  }

  divinsert : boolean = false
  inserimentorisorse()
  {
    this.modify=false
    this.divinsert = true
  }
  
  inseriscirisorse()
  {
    
    this.usoRisorse.commessa=this.commessa
    
    if(this.usoRisorse.mese==null || this.usoRisorse.risorse==null || this.usoRisorse.ore==null)
    {
      window.alert("tutti i dati sono obligatori")
    }
    else
    {
      this.divinsert = false
      this.inserisci.setUsoRisorse(this.usoRisorse).subscribe(response=>{this.messaggio=response})
      this.inserisci.getUsoRisorse(this.a,this.b).subscribe(response=>{this.usorisorse=response
      
        this.dataSource.data = this.usorisorse;
      }) 
      
      setTimeout("location.reload(true);",1000)
    }
      this.dataSource.paginator = this.paginator 
  }
  // assegnarisorsepreventivate()
  // {
  //   //sessionStorage.setItem('tipoUsoRisorse', '2')
  //   this.route.navigate(['assegnarisorsepreventivate'])
  // }

  usorisorsemod :  UsoRisorse = new UsoRisorse

  modify : boolean = false
modificaRisorse(usorisorse : UsoRisorse)
{
    this.usorisorsemod = usorisorse
    this.divinsert = false
    this.modify=true
}

modifica()
{
  this.inserisci.modUsoRisorse(this.usorisorsemod).subscribe(response=>{this.messaggio=response})
  setTimeout("location.reload(true);",1000)
  this.modify=false
}

consolidaur = new UsoRisorse 

consolida(usorisore : UsoRisorse)
{
  usorisore.consolida = new Date
  console.log(usorisore.consolida)
  this.consolidaur = usorisore
  this.inserisci.consolidauso(this.consolidaur).subscribe(response=>{this.messaggio=response})
}

chiudipreventivo()
  {
    this.inserisci.chiudipreventivo(this.session.get('IDCOMMESSA')).subscribe(response=>{this.messaggio=response})
    this.route.navigate(['riepilogo']);
  }



}
