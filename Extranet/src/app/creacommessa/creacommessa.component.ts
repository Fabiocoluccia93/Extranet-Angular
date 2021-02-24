import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms'
import { InserimentoService } from '../services/inserimento.service';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { observable } from 'rxjs';
import { Commessa } from '../classi/ClassiGenerali';



@Component({
  selector: 'app-creacommessa',
  templateUrl: './creacommessa.component.html',
  styleUrls: ['./creacommessa.component.css']
})
export class CreacommessaComponent implements OnInit {
  commessa : Commessa = new Commessa
  constructor(private inserisci : InserimentoService,private route : Router,private http: HttpClient) { }
  messaggio : string = ''
  asa : string = "ASDASD"
  regexp =  new RegExp('^[A-Za-z0-9 ]{3,20}$');

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
           this.commessa.valore=0
           if(this.regexp.test(this.commessa.nome) && this.regexp.test(this.commessa.cliente))
           {
              this.commessa.fatturato=0
              this.commessa.valore=0
              this.inserisci.setCommessa(this.commessa).subscribe(response=>{
              let b = response
                let c  = b.toString()
                  sessionStorage.setItem("idcommessa",c);
                  console.log("id commessa in creacommessa"+c)
              })
              this.messaggio="commessa inserita con successo"
              setTimeout(() => 
              {
                this.route.navigate(['assegnatask']);
              },
              2000);
            }
            else
            {
              if(!this.regexp.test(this.commessa.nome))
              {
                this.messaggio = "non sono concessi caratteri speciali nel campo nome"
              }
              if(!this.regexp.test(this.commessa.cliente))
              {
                this.messaggio = "non sono concessi caratteri speciali nel campo cliente"
              }
              if(!this.regexp.test(this.commessa.nome) && !this.regexp.test(this.commessa.cliente))
              {
                this.messaggio = "non sono concessi caratteri speciali nei campi cliente e nel campo nome"
              }
            }
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
