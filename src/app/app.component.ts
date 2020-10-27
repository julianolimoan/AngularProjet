import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Date();

  appareils:any[];
  constructor(private appareilService: AppareilService){

  }
  
    
  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

 
  title: any;
  onAllumer(){
    this.appareilService.SwitchOnAll();
  }

  onEteindre(){
    this.appareilService.SwitchOffAll();
  }
}

