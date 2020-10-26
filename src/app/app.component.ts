import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Date();

  appareils = [
  {
  name: 'Machine à laver',
  status: 'éteint'
},
{
  name:'télévision',
  status:'allumé'
}, 


{
  name: 'Ordinateur',
  status:'éteint'
}
];
  onAllumer(){
    console.log('On allume tout');
  }
}

