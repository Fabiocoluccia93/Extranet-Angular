import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : "", component : LoginComponent },
  {path : "login", component : LoginComponent},
  {path : "homeuser" , component : HomeUserComponent},
  {path : "homeadmin" , component : HomeAdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
