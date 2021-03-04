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
  b : number = 1 //mockato su ricavi
 attivitas : Attivita[] = []
 avanzamento : Avanzamento = new Avanzamento()
 avanzamentiarray : Avanzamento[]=[]
 attivitaarray : Attivita[]=[]
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
    this.inserisci.getAttivitaCommessaByType(this.a,this.b).subscribe(response=>{
      response.forEach(element => {
        element.avanzamento?.forEach(element2 =>{ 
          console.log(element2)
          if(element2.tipoAvanzamento?.id_tipo_avanzamento==this.b)
          {
            if(this.avanzamentiarray.length>0)
            {
            this.avanzamentiarray.forEach(element3 =>{
              if(element3.id_avanzamento!=element2.id_avanzamento)
              {
                this.avanzamentiarray.push(element2);
              }
            })
            }
            else
            {
              this.avanzamentiarray.push(element2);
            }
          }
        })
      element.avanzamento=this.avanzamentiarray
      
      this.attivitas.push(element)
      })
      
        
      });
      console.log(this.attivitas)
    
   
    this.inserisci.getMesi().subscribe(response=>{​​​​ this.mesi = response}​​​​)
  }

}
