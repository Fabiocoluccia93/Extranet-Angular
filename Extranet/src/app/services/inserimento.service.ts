import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mese, Task } from '../inseriscitask/inseriscitask.component';
import { Commessa } from '../selezionacommessa/selezionacommessa.component';
import { Attivita } from '../assegnatask/assegnatask.component';

@Injectable({
  providedIn: 'root'
})
export class InserimentoService {

  constructor(private http : HttpClient) { }

  getTasks()
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

  setCommessa(c : Commessa)
  {
    return this.http.post<Commessa>(`http://localhost:8080/commessa`,c);
  }

  setAttivita(a : Attivita)
  {
    return this.http.post<Attivita>(`http://localhost:8080/assegnaattivita`,a);
  }

}
