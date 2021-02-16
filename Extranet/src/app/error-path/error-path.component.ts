import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { SessionUtenteService } from '../services/session-utente.service';

@Component({
  selector: 'app-error-path',
  templateUrl: './error-path.component.html',
  styleUrls: ['./error-path.component.css']
})
export class ErrorPathComponent implements OnInit {

  

  constructor(private route : Router, private SessionUtente :SessionUtenteService) { }

  ngOnInit(): void {
    if(this.SessionUtente.isLoggato()){
      this.route.navigate(['homepage'])
    }
    else
    {
      this.route.navigate([''])
    }
  }

}
