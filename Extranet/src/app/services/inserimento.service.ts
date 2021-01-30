import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Avanzamento, Mese, Task } from '../inseriscitask/inseriscitask.component';
import { Commessa } from '../selezionacommessa/selezionacommessa.component';
import { Attivita } from '../assegnatask/assegnatask.component';
import { Risorse, TipoRisorse, Usorisorse } from '../assegnarisorse/assegnarisorse.component';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TipoUsoRisorse } from '../preventivorisorse/preventivorisorse.component';


@Injectable({
  providedIn: 'root'
})
export class InserimentoService {

  constructor(private http : HttpClient) { }

  getTasks() : Observable<Task[]>
  {
    return this.http.get<Task[]>(`http://localhost:8080/task`);
  }
  
  getMesi()
  {
    return this.http.get<Mese[]>(`http://localhost:8080/mese`);
  }

  getCommessa()
  {
    return this.http.get<Commessa[]>(`http://localhost:8080/commessa`);
  }

  getRisorse()
  {
    return this.http.get<Risorse[]>(`http://localhost:8080/risorse`);
  }

  getTipoRisorse()
  {
    return this.http.get<TipoRisorse[]>(`http://localhost:8080/tiporisorse`);
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
    
    // sessionStorage.setItem("idcommessa",newCommessa.idcommessa.toString());
  

  setAttivita(a : Attivita) 
  {
    return this.http.post<Attivita>(`http://localhost:8080/assegnaattivita`,a);
  }

  setAvanzamento(a : Avanzamento)
  {
    return this.http.post<Avanzamento>(`http://localhost:8080/avanzamento` ,a)
  }

  setUsoRisorse(u :Usorisorse)
  {
    return this.http.post<Usorisorse>(`http://localhost:8080/usorisorse`,u)
  }

}
