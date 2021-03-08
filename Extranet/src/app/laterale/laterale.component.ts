import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Abilitazioni } from '../classi/ClassiUtenti';
import { GestAccessoService } from '../services/gest-accesso.service';

@Component({
  selector: 'app-laterale',
  templateUrl: './laterale.component.html',
  styleUrls: ['./laterale.component.css']
})
export class LateraleComponent implements OnInit {

  visualizzazione : boolean = false
  abilitazioni : Abilitazioni = new Abilitazioni


  constructor(private session : SessionStorageService, private gest : GestAccessoService ) { }

  ngOnInit(): void {
    if(this.session.get('IDCOMMESSA')!=null && sessionStorage.getItem('idcommessa')!=null)
    {
     this.visualizzazione = true
    }
    
    this.gest.getAbilitazioniByTipoUtente(this.session.get('IDGRUPPO')).subscribe(response=>
      {
        this.abilitazioni=response
      })
      
 


  }

}
