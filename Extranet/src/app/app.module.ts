import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {ChartsModule} from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeUserComponent,
    NavbarComponent,
    HomeAdminComponent,
    FooterComponent,
    LateraleComponent,
    TaskComponent,
    CreacommessaComponent,
    InseriscitaskComponent,
    SelezionacommessaComponent,
    AssegnataskComponent,
    AssegnarisorseComponent,
    PreventivorisorseComponent,
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
