import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anno, Avanzamento, Mese} from '../inseriscitask/inseriscitask.component';
import { Commessa } from '../selezionacommessa/selezionacommessa.component';
import { Attivita } from '../assegnatask/assegnatask.component';
import { Risorse, TipoRisorse, Usorisorse } from '../assegnarisorse/assegnarisorse.component';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TipoUsoRisorse, UsoRisorse } from '../preventivorisorse/preventivorisorse.component';


@Injectable({
  providedIn: 'root'
})
export class InserimentoService {

  constructor(private http : HttpClient) { }
  
  getMesi()
  {
    return this.http.get<Mese[]>(`http://localhost:8080/mese`);
  }

  getAnni()
  {
    return this.http.get<Anno[]>(`http://localhost:8080/getanno`);
  }

  getCommessa()
  {
    return this.http.get<Commessa[]>(`http://localhost:8080/commessalist`);
  }

  getRisorse()
  {
    return this.http.get<Risorse[]>(`http://localhost:8080/risorse`);
  }

  getTipoRisorse()
  {
    return this.http.get<TipoRisorse[]>(`http://localhost:8080/tiporisorse`);
  }

  controllaCommessa()
  {
    return this.http.get<string>(`http://localhost:8080/getmessaggio`) 
  }

  setCommessa( c: Commessa )
  {
    return this.http.post<number>(`http://localhost:8080/commessa`, c ) 
  }

  getCommessaId(id : number) 
  {
    return this.http.get<Commessa>(`http://localhost:8080/commessa/${id}`)
  }
  getTipoUsoRisorse(id : number)
  {
    return this.http.get<TipoUsoRisorse>(`http://localhost:8080/tipousorisorse/${id}`)
  }

  getCommessaAttivita(id : number)
  {
    return this.http.get<Attivita[]>(`http://localhost:8080/listaattivita/${id}`)
  }
  getUsoRisorse(id : number , idt : number)
  {
    return this.http.get<UsoRisorse[]>(`http://localhost:8080/usorisorselist/${id}/${idt}`);
  }
    // sessionStorage.setItem("idcommessa",newCommessa.idcommessa.toString());
  

  setAttivita(a : Attivita) 
  {
    return this.http.post<Attivita>(`http://localhost:8080/assegnaattivita`,a);
  }

  setAvanzamento(a : Avanzamento) 
  {
    return this.http.post<string>(`http://localhost:8080/avanzamento` ,a)
  }

  modAvanzamento(a : Avanzamento) 
  {
    return this.http.put<string>(`http://localhost:8080/modavanzamento` ,a)
  }

  getAvanzamentoByCommessa(id: number)
  {
    return this.http.get<Avanzamento[]>(`http://localhost:8080/avanzamentolist/${id}`)
  }

  getAvanzamentoByCommessaType(id: number,idt : number)
  {
    return this.http.get<Avanzamento[]>(`http://localhost:8080/avanzamentolist/${id}/${idt}`)
  }

  setUsoRisorse(u :Usorisorse)
  {
    return this.http.post<string>(`http://localhost:8080/usorisorse`,u)
  }

  modUsoRisorse(u :Usorisorse)
  {
    return this.http.put<string>(`http://localhost:8080/modusorisorse`,u)
  }
}
