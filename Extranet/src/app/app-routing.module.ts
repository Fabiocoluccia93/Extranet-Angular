import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssegnarisorseComponent } from './assegnarisorse/assegnarisorse.component';
import { AssegnataskComponent } from './assegnatask/assegnatask.component';
import { CreaUtenteComponent } from './crea-utente/crea-utente.component';
import { CreacommessaComponent } from './creacommessa/creacommessa.component';
import { DatiComponent } from './dati/dati.component';
import { DisabilitaUtenteComponent } from './disabilita-utente/disabilita-utente.component';
import { ErrorPathComponent } from './error-path/error-path.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InseriscitaskComponent } from './inseriscitask/inseriscitask.component';
import { LoginComponent } from './login/login.component';
import { ModificaavanzamentoComponent } from './modificaavanzamento/modificaavanzamento.component';
import { ModificaPasswordComponent } from './modifica-password/modifica-password.component';
import { PreventivorisorseComponent } from './preventivorisorse/preventivorisorse.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SelezionacommessaComponent } from './selezionacommessa/selezionacommessa.component';
import { RiepilogoComponent } from './riepilogo/riepilogo.component';
import { RouteguardService } from './services/routeguard.service';
import { RouteguardTipologiaService } from './services/routeguard-tipologia.service';
import { VisualizzaAvanzamentoComponent } from './visualizza-avanzamento/visualizza-avanzamento.component';
import { VisualizzaRisorseComponent } from './visualizza-risorse/visualizza-risorse.component';
import { RouteguardTipologia2Service } from './services/routeguardtipologia2.service';
import { RouteguardTipologia3Service } from './services/routeguardtipologia3.service';


const routes: Routes = [
  { path : "", component : LoginComponent },
  { path : "login", component : LoginComponent},
  { path : "creaUtente" , component : CreaUtenteComponent, canActivate:[RouteguardService , RouteguardTipologia2Service]},
  { path : "resetPassword" , component : ResetPasswordComponent, canActivate:[RouteguardService, RouteguardTipologia2Service]},
  { path : "homepage" , component : HomePageComponent, canActivate:[RouteguardService, RouteguardTipologia2Service]},
  { path : "disabilitaUtente" , component :DisabilitaUtenteComponent, canActivate:[RouteguardService , RouteguardTipologia2Service]},
  { path : "modificaPassword" , component : ModificaPasswordComponent, canActivate:[RouteguardService]},
  { path : "creacommessa", component : CreacommessaComponent, canActivate:[RouteguardService, RouteguardTipologia3Service]},
  { path: 'selezionacommessa',component:SelezionacommessaComponent, canActivate:[RouteguardService, RouteguardTipologiaService]},
  { path: 'assegnatask',component:AssegnataskComponent, canActivate:[RouteguardService, RouteguardTipologia3Service]},
  { path: 'assegnarisorsepreventivate', component:PreventivorisorseComponent,data: { kind: 'preventivate' }, canActivate:[RouteguardService , RouteguardTipologia3Service]},
  { path: 'assegnarisorseerogate', component:PreventivorisorseComponent,data: { kind: 'erogate' }, canActivate:[RouteguardService , RouteguardTipologia3Service]},
  { path: 'task', component:ModificaavanzamentoComponent, data: { kind: 'task' }, canActivate:[RouteguardService , RouteguardTipologia3Service]},
  { path: 'ricavi', component:ModificaavanzamentoComponent, data :{ kind:'ricavi'}, canActivate:[RouteguardService , RouteguardTipologia3Service]},
  { path: 'previsionericavi', component:ModificaavanzamentoComponent, data :{ kind:'previsionericavi'}, canActivate:[RouteguardService , RouteguardTipologia3Service]},
  { path: 'previsionetask', component:ModificaavanzamentoComponent, data :{ kind:'previsionetask'}, canActivate:[RouteguardService, RouteguardTipologia3Service]},
  { path : "modificaavanzamento", component : ModificaavanzamentoComponent, canActivate:[RouteguardService, RouteguardTipologia3Service]},
  { path : "riepilogo", component : RiepilogoComponent, canActivate:[RouteguardService, RouteguardTipologiaService]},
  { path : "dati", component : DatiComponent, canActivate:[ RouteguardService, RouteguardTipologia3Service]},
  { path : "vis" , component : VisualizzaAvanzamentoComponent,data:{kind:'a'}, canActivate : [RouteguardService , RouteguardTipologiaService] },
  { path : "ris" , component : VisualizzaRisorseComponent, canActivate : [RouteguardService , RouteguardTipologiaService] },
  { path : '**'  , component: ErrorPathComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
