import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Attivita } from '../assegnatask/assegnatask.component';
import { LateraleComponent } from '../laterale/laterale.component';
import { InserimentoService } from '../services/inserimento.service';


export class Commessa
{

  
  constructor(
    public id_commessa? : number | null,
    public nome? : string | null,
    public cliente? : string | null,
    public valore? : number | null,
    public fatturato? : number | null,
    public inizio? : Date | null,
    public fine? : Date | null,
    
  )
{}
}
@Component({
  selector: 'app-selezionacommessa',
  templateUrl: './selezionacommessa.component.html',
  styleUrls: ['./selezionacommessa.component.css']
})
export class SelezionacommessaComponent implements OnInit {

  constructor(private inserimento : InserimentoService, private route : Router , private session : SessionStorageService ) { }
  commesse : Commessa[] = []
  commessasel : Commessa = new Commessa;
  commessa : Commessa = new Commessa;
  public id : string = '' 
  i : number = 0
  
  ngOnInit(): void 
  {    
    this.inserimento.getCommessa().subscribe(response=>{this.commesse=response;})
  }

  commessaChanged(commessa : Commessa)
  {
    this.commessasel = commessa;
    console.log(commessa.id_commessa)
    console.log(this.commessasel.id_commessa)
    if(this.commessasel.id_commessa?.toString()!= null)
    {
      this.id = this.commessasel.id_commessa?.toString()
      console.log(this.id)
      sessionStorage.setItem("idcommessa",this.id);
      this.session.set('IDCOMMESSA', this.commessasel.id_commessa)
      setTimeout('location.reload(true)', 0)
      this.route.navigate(['riepilogo'])
    }
   
  }
 
}
