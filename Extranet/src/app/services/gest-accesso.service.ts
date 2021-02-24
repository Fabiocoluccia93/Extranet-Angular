import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gruppo, Utente } from '../classi/ClassiUtenti';


@Injectable({
  providedIn: 'root'
})
export class GestAccessoService {

  constructor(private http:HttpClient) { }

  autenticazione(u : Utente)
  {
    return this.http.post<Utente>(`http://localhost:8080/utenti/accesso`, u)
  }

  utentiDiUnGruppo( descrizione : string)
  {
    return this.http.get<Utente[]>(`http://localhost:8080/utenti/${descrizione}`);
  }

  modificaPassword(u : Utente)
  {
    return this.http.put<boolean>(`http://localhost:8080/utenti/modificaPassword`,u);
  }

  tuttiGruppi()
  {
    return this.http.get<Gruppo []>(`http://localhost:8080/utenti/tuttiGruppi`);
  }

  disabilitaUtente(u : Utente)
  {
    return this.http.put<boolean>(`http://localhost:8080/utenti/disabilita`,u);
  }

  creaUtente(u : Utente)
  {
    return this.http.post<boolean>(`http://localhost:8080/utenti/crea`,u)
  }

  cercaUtente(cerca : string)
  {
    return this.http.get<Utente[]>(`http://localhost:8080/utenti/cercaUtente/${cerca}`)
  }

  resetPassword(u : Utente)
  {
    return this.http.put<boolean>(`http://localhost:8080/utenti/resetPassword`,u)
  }

  confrontaPassword(u : Utente)
  {
    return this.http.post<boolean>(`http://localhost:8080/utenti/confrontaPassword`,u)
  }

  cercaUtenteDiGruppo(username : string , gruppo:string)
  {
    return this.http.get<Utente[]>(`http://localhost:8080/utenti/cercaUtenteGruppo/${username}/${gruppo}`)
  }
}
