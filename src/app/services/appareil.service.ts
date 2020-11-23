import { Subject} from'rxjs';

export class AppareilService {
   appareilSubject = new Subject<any[]>();
   private appareils = [
        {id: 1,
        name: 'Machine à laver',
        status: 'éteint'
      },
      {id: 2,
        name:'télévision',
        status:'allumé'
      }, 
      
      
      {id: 3,
        name: 'Ordinateur',
        status:'éteint'
      }
      ];


      onitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
      }

      getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (appareilObject) => {
            return appareilObject.id === id;
          }
        );
        return appareil;
      }



      SwitchOnAll() {
          for(let appareil of this.appareils){
              appareil.status = 'allumé'
          }
          this.onitAppareilSubject();
      }
      SwitchOffAll() {
        for(let appareil of this.appareils){
            appareil.status = 'éteint'
        }
        this.onitAppareilSubject();
    }
    switchOnOne(index: number) {
      this.appareils[index].status = 'allumé';
      this.onitAppareilSubject();
    }
    switchOffOne(index: number) {
      this.appareils[index].status = 'éteint';
      this.onitAppareilSubject();
    }
}
