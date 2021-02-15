import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsoRisorse } from '../preventivorisorse/preventivorisorse.component';
import { Commessa } from '../selezionacommessa/selezionacommessa.component';
import { InserimentoService } from '../services/inserimento.service';

export class Attivita
{
  constructor(
    public id_attivita? : number | null,
    public descrizione? : string | null,
    public commessa? : Commessa | null, //tipo commessa
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
  attivitas : Attivita [] =[]
  attivita : Attivita = new Attivita()
  attivita1 : Attivita = new Attivita()
  a : number = 0

  tipoUsoRisorse : TipoUsoRisorse = new TipoUsoRisorse
  bool : boolean = true

  messaggio :string =''
  regexp =  new RegExp('^[A-Za-z0-9]{3,30}$');

  ngOnInit(): void 
  {
    
    //prendo id commessa dal session storage e cerco nel db l'oggetto che passo a attivita.commessa
      
      this.idcommessa = sessionStorage.getItem("idcommessa")
      if(this.idcommessa!=null)
      {
         this.a  = +this.idcommessa
         console.log("ID Commessa nello storage"+this.a)
         //passare get a 
         this.inserisci.getCommessaId(this.a).subscribe(response=>{
         this.attivita.commessa=response
         })
         if(this.attivita.commessa!=null)
         {
          console.log("ID Commessa "+this.attivita.commessa.id_commessa)
         }
      }
    this.inserisci.getCommessaAttivita(this.a).subscribe(response=>{this.attivitas=response;})
  
  }

 

  inserisciattivita()
  {

    if(this.attivita.descrizione!=null && this.regexp.test(this.attivita.descrizione))
      {
        this.inserisci.setAttivita(this.attivita).subscribe(response=>{})
        this.inserisci.getCommessaAttivita(this.a).subscribe(response=>{this.attivitas=response;})
        window.location.reload()
      }
    else
    {
      this.messaggio="non sono ammessi caratteri speciali nel campo descizione"
    }
     
  }
  assegnarisorsepreventivate()
  {
    //sessionStorage.setItem('tipoUsoRisorse', '1')
    this.route.navigate(['assegnarisorsepreventivate'])
  }
  

}
