import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Date();




  appareilSubscription: Subscription

  appareils:any[];
  constructor(private appareilService: AppareilService){

  }
  
    
  ngOnInit(){
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils:any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.onitAppareilSubject(); 

  }

 
  title: any;
  onAllumer(){
    this.appareilService.SwitchOnAll();
  }

  onEteindre(){
    this.appareilService.SwitchOffAll();
  }

}
