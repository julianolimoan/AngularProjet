export class AppareilService {
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
      SwitchOnAll() {
          for(let appareil of this.appareils){
              appareil.status = 'allumé'
          }
      }
      SwitchOffAll() {
        for(let appareil of this.appareils){
            appareil.status = 'éteint'
        }
    }
}