import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModificaavanzamentoComponent } from './modificaavanzamento/modificaavanzamento.component';
import { TableManagmentComponent } from './table-managment/table-managment.component';
import { TableAdminComponent } from './table-admin/table-admin.component';
import { RiepilogoComponent } from './riepilogo/riepilogo.component';
import { ChartsModule } from 'ng2-charts';
import { DatiComponent } from './dati/dati.component';



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
    DatiComponent,
    HomePageComponent,
    ErrorPathComponent,
    ResetPasswordComponent,
    ModificaavanzamentoComponent,
    TableManagmentComponent,
    TableAdminComponent,
    RiepilogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule, 
    ChartsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
