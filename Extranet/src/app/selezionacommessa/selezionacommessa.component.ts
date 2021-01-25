import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InserimentoService } from '../services/inserimento.service';


export class Commessa
{
  constructor(
    public idcommessa? : number | null,
    public nome? : string | null,
    public cliente? : string | null,
    public valore? : number | null,
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

  constructor(private inserimento : InserimentoService, private route : Router) { }
  commesse : Commessa[] = []
  commessasel : Commessa = new Commessa;
  public id : string  = ''
  ngOnInit(): void 
  {
    this.inserimento.getCommessa().subscribe(response=>{this.commesse=response;})
  }
  inserisce()
  {
    if(this.commessasel.idcommessa!=null)
    {
      this.id=this.commessasel.idcommessa?.toString()
    }
    else
    {
      window.alert("seleziona una commessa")
    }
    sessionStorage.setItem("id",this.id)
    this.route.navigate(['task'])
  }

}
