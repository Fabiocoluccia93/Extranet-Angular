import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=''
  password=''  

  constructor(private route :Router, private app : AppComponent ) { }

  ngOnInit(): void {
    this.app.show=false
  }

  accesso()
  {
    if(this.user==='alessio' && this.password==='123')
    {
      window.alert("accesso effettuato come utente");
      this.route.navigate(['homeuser']);
    }
    else if(this.user==='admin' && this.password==='123')
    {
      window.alert("accesso effettuato come amministratore");
      this.route.navigate(['homeadmin']);
    }
    this.app.show=true
  }

}
