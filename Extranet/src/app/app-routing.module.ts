import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssegnarisorseComponent } from './assegnarisorse/assegnarisorse.component';
import { AssegnataskComponent } from './assegnatask/assegnatask.component';
import { CreacommessaComponent } from './creacommessa/creacommessa.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { InseriscitaskComponent } from './inseriscitask/inseriscitask.component';
import { LoginComponent } from './login/login.component';
import { PreventivorisorseComponent } from './preventivorisorse/preventivorisorse.component';

const routes: Routes = [
  { path : "", component : LoginComponent },
  { path : "login", component : LoginComponent},
  { path : "homeuser" , component : HomeUserComponent},
  { path : "homeadmin" , component : HomeAdminComponent},
  { path: 'creacommessa',component:CreacommessaComponent},
  { path: 'assegnatask',component:AssegnataskComponent},
  { path: 'assegnarisorsepreventivate', component:PreventivorisorseComponent},
  { path: 'task', component:InseriscitaskComponent, data :{ tipologia:'1'}},
  { path: 'ricavi', component:InseriscitaskComponent, data :{ tipologia:'2'}},
  { path: 'prevtask', component:InseriscitaskComponent, data :{ tipologia:'3'}},
  { path: 'prevricavi', component:InseriscitaskComponent, data :{ tipologia:'4'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
