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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeUserComponent,
    NavbarComponent,
    HomeAdminComponent,
    FooterComponent,
    LateraleComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
