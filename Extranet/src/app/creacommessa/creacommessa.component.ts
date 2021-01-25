import { Component, OnInit } from '@angular/core';
import { Commessa } from '../selezionacommessa/selezionacommessa.component';
import { FormGroup , FormControl , Validators } from '@angular/forms'
import { InseriscitaskComponent } from '../inseriscitask/inseriscitask.component';
import { InserimentoService } from '../services/inserimento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacommessa',
  templateUrl: './creacommessa.component.html',
  styleUrls: ['./creacommessa.component.css']
})
export class CreacommessaComponent implements OnInit {
  commessa : Commessa = new Commessa
  constructor(private inserisci : InserimentoService,private route : Router) { }
 
 
  
  ngOnInit(): void 
  {
   
  }

    inseriscicommessa()
    {
      if(this.commessa.nome!=null && this.commessa.nome!='' && this.commessa.cliente!=null && this.commessa.cliente!='' && this.commessa.inizio!=null && this.commessa.fine!=null)
      {
        if(this.commessa.inizio<this.commessa.fine)
          {
            this.commessa.idcommessa=1
            console.log(this.commessa.idcommessa)
            console.log(this.commessa.nome)
            console.log(this.commessa.cliente)
            console.log(this.commessa.inizio)
            console.log(this.commessa.fine)
            sessionStorage.setItem("idcommessa",this.commessa.idcommessa.toString())
            this.inserisci.setCommessa(this.commessa).subscribe(response=>{})
            this.route.navigate(['assegnatask']);
          }
        else
        {
          window.alert("insrisci una data di inzio antecedente alla data di fine")
        }
      }
      else 
      {
        window.alert("Inserisci tutti i dati")
      }
    }
  
   

}