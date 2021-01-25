import { Component, OnInit } from '@angular/core';
import { Commessa } from '../selezionacommessa/selezionacommessa.component';
import { FormGroup , FormControl , Validators } from '@angular/forms'
import { InseriscitaskComponent } from '../inseriscitask/inseriscitask.component';

@Component({
  selector: 'app-creacommessa',
  templateUrl: './creacommessa.component.html',
  styleUrls: ['./creacommessa.component.css']
})
export class CreacommessaComponent implements OnInit {
  commessa : Commessa = new Commessa
  constructor() { }
 
 
  
  ngOnInit(): void 
  {
   
  }

    inserisci()
    {

    }
  
   

}
