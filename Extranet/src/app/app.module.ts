import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {ChartsModule} from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LateraleComponent } from './laterale/laterale.component';
import { TaskComponent } from './task/task.component';
import { CreacommessaComponent } from './creacommessa/creacommessa.component';
import { InseriscitaskComponent } from './inseriscitask/inseriscitask.component';
import { SelezionacommessaComponent } from './selezionacommessa/selezionacommessa.component';
import { HttpClientModule } from '@angular/common/http';
import { AssegnataskComponent } from './assegnatask/assegnatask.component';
import { AssegnarisorseComponent } from './assegnarisorse/assegnarisorse.component';
import { PreventivorisorseComponent } from './preventivorisorse/preventivorisorse.component';
import { CreaUtenteComponent } from './crea-utente/crea-utente.component';
import { ModificaPasswordComponent } from './modifica-password/modifica-password.component';
import { DisabilitaUtenteComponent } from './disabilita-utente/disabilita-utente.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPathComponent } from './error-path/error-path.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    LateraleComponent,
    TaskComponent,
    CreacommessaComponent,
    InseriscitaskComponent,
    SelezionacommessaComponent,
    AssegnataskComponent,
    AssegnarisorseComponent,
    PreventivorisorseComponent,
    CreaUtenteComponent,
    ModificaPasswordComponent,
    DisabilitaUtenteComponent,
    HomePageComponent,
    ErrorPathComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
