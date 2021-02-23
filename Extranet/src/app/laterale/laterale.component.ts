import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-laterale',
  templateUrl: './laterale.component.html',
  styleUrls: ['./laterale.component.css']
})
export class LateraleComponent implements OnInit {

  amministratore: boolean = false

  constructor(private session : SessionStorageService) { }

  ngOnInit(): void {
    if(this.session.get('TIPOLOGIA')=="amministratore")
    {
      this.amministratore= true
    }

  }

}
