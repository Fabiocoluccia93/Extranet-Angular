import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssegnarisorseComponent } from './assegnarisorse/assegnarisorse.component';
import { AssegnataskComponent } from './assegnatask/assegnatask.component';
import { CreaUtenteComponent } from './crea-utente/crea-utente.component';
import { CreacommessaComponent } from './creacommessa/creacommessa.component';
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

const routes: Routes = [
  { path : "", component : LoginComponent },
  { path : "login", component : LoginComponent},
  { path : "creaUtente" , component : CreaUtenteComponent, canActivate:[RouteguardService]},
  { path : "resetPassword" , component : ResetPasswordComponent, canActivate:[RouteguardService]},
  { path : "homepage" , component : HomePageComponent, canActivate:[RouteguardService]},
  { path : "disabilitaUtente" , component :DisabilitaUtenteComponent, canActivate:[RouteguardService]},
  { path : "modificaPassword" , component : ModificaPasswordComponent, canActivate:[RouteguardService]},
  { path: 'creacommessa',component:CreacommessaComponent, canActivate:[RouteguardService]},
  { path: 'selezionacommessa',component:SelezionacommessaComponent, canActivate:[RouteguardService]},
  { path: 'assegnatask',component:AssegnataskComponent, canActivate:[RouteguardService]},
  { path: 'assegnarisorsepreventivate', component:PreventivorisorseComponent,data: { kind: 'preventivate' }, canActivate:[RouteguardService]},
  { path: 'assegnarisorseerogate', component:PreventivorisorseComponent,data: { kind: 'erogate' }, canActivate:[RouteguardService]},
  { path: 'task', component:ModificaavanzamentoComponent, data: { kind: 'task' }, canActivate:[RouteguardService]},
  { path: 'ricavi', component:ModificaavanzamentoComponent, data :{ kind:'ricavi'}, canActivate:[RouteguardService]},
  { path: 'previsionericavi', component:ModificaavanzamentoComponent, data :{ kind:'previsionericavi'}, canActivate:[RouteguardService]},
  { path: 'previsionetask', component:ModificaavanzamentoComponent, data :{ kind:'previsionetask'}, canActivate:[RouteguardService]},
  { path : "modificaavanzamento", component : ModificaavanzamentoComponent, canActivate:[RouteguardService]},
  { path : "riepilogo", component : RiepilogoComponent, canActivate:[RouteguardService]},
  { path : '**'  , component: ErrorPathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
