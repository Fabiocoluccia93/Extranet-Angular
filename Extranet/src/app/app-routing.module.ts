import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssegnarisorseComponent } from './assegnarisorse/assegnarisorse.component';
import { AssegnataskComponent } from './assegnatask/assegnatask.component';
import { CreaUtenteComponent } from './crea-utente/crea-utente.component';
import { CreacommessaComponent } from './creacommessa/creacommessa.component';
import { DatiComponent } from './dati/dati.component';
import { DisabilitaUtenteComponent } from './disabilita-utente/disabilita-utente.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { InseriscitaskComponent } from './inseriscitask/inseriscitask.component';
import { LoginComponent } from './login/login.component';
import { ModificaavanzamentoComponent } from './modificaavanzamento/modificaavanzamento.component';
import { PreventivorisorseComponent } from './preventivorisorse/preventivorisorse.component';
import { SelezionacommessaComponent } from './selezionacommessa/selezionacommessa.component';

const routes: Routes = [
  { path : "", component : LoginComponent },
  { path : "login", component : LoginComponent},
  { path : "homeuser" , component : HomeUserComponent},
  { path : "homeadmin" , component : HomeAdminComponent},
  { path : "creaUtente" , component : CreaUtenteComponent},
  { path : "disabilitaUtente" , component :DisabilitaUtenteComponent},
  { path: 'creacommessa',component:CreacommessaComponent},
  { path: 'selezionacommessa',component:SelezionacommessaComponent},
  { path: 'assegnatask',component:AssegnataskComponent},
  { path: 'assegnarisorsepreventivate', component:PreventivorisorseComponent,data: { kind: 'preventivate' }},
  { path: 'assegnarisorseerogate', component:PreventivorisorseComponent,data: { kind: 'erogate' }},
  { path: 'task', component:ModificaavanzamentoComponent, data: { kind: 'task' }},
  { path: 'ricavi', component:ModificaavanzamentoComponent, data :{ kind:'ricavi'}},
  { path: 'previsionericavi', component:ModificaavanzamentoComponent, data :{ kind:'previsionericavi'}},
  { path: 'previsionetask', component:ModificaavanzamentoComponent, data :{ kind:'previsionetask'}},
  { path : "modificaavanzamento", component : ModificaavanzamentoComponent},
  { path : "dati", component : DatiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
