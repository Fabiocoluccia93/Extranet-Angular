import { Component, OnInit } from '@angular/core';
import { Commessa } from '../selezionacommessa/selezionacommessa.component';
import { FormGroup , FormControl , Validators } from '@angular/forms'
import { InserimentoService } from '../services/inserimento.service';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { observable } from 'rxjs';



@Component({
  selector: 'app-creacommessa',
  templateUrl: './creacommessa.component.html',
  styleUrls: ['./creacommessa.component.css']
})
export class CreacommessaComponent implements OnInit {
  commessa : Commessa = new Commessa
  constructor(private inserisci : InserimentoService,private route : Router,private http: HttpClient) { }

  a : number = 0
  ngOnInit(): void 
  {
  
  }

    inseriscicommessa() 
    {
      
      if(this.commessa.nome!=null && this.commessa.nome!='' && this.commessa.cliente!=null && this.commessa.cliente!='' && this.commessa.inizio!=null && this.commessa.fine!=null)
      {
        if(this.commessa.inizio<this.commessa.fine)
         {
            console.log(this.commessa.id_commessa)
            console.log(this.commessa.nome)
            console.log(this.commessa.cliente)
           console.log(this.commessa.inizio)
           console.log(this.commessa.fine)
           this.commessa.valore=0
          
           
           //   this.commessa.inizio=null
           //   this.commessa.fine=null
              this.inserisci.setCommessa(this.commessa).subscribe(response=>{
              let b = response
                //this.a = b
                let c  = b.toString()
                  sessionStorage.setItem("idcommessa",c);
                 // sessionStorage.setItem("idcommessa",response.toString());
                  console.log("id commessa in creacommessa"+c)
              
                
              })
              

            
              setTimeout(() => 
              {
                this.route.navigate(['assegnatask']);
              },
              2000);
           
          }
        else
        {
          window.alert("inserisci una data di inzio antecedente alla data di fine")
        }
      }
      else 
      {
        window.alert("Inserisci tutti i dati")
      }
    }
  
   

}
