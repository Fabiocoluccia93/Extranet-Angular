import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Commessa } from '../classi/ClassiGenerali';
import { Abilitazioni } from '../classi/ClassiUtenti';
import { GestAccessoService } from '../services/gest-accesso.service';
import { InserimentoService } from '../services/inserimento.service';

@Component({
  selector: 'app-laterale',
  templateUrl: './laterale.component.html',
  styleUrls: ['./laterale.component.css']
})
export class LateraleComponent implements OnInit {

  visualizzazione : boolean = false
  abilitazioni : Abilitazioni = new Abilitazioni
  commessa : Commessa = new Commessa()

  constructor(private session : SessionStorageService, private gest : GestAccessoService, private inserisci : InserimentoService ) { }

  ngOnInit(): void {
    if(this.session.get('IDCOMMESSA')!=null && sessionStorage.getItem('idcommessa')!=null)
    {
     this.visualizzazione = true
    }
    
    this.gest.getAbilitazioniByTipoUtente(this.session.get('IDGRUPPO')).subscribe(response=>
      {
        this.abilitazioni=response
      })
      
      this.inserisci.getCommessaId(this.session.get('IDCOMMESSA')).subscribe(response=>{this.commessa=response; console.log(this.commessa)})

      


  }

}
