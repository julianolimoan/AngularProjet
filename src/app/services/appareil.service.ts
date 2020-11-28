import { from, Subject} from'rxjs';
import { HttpClient} from'@angular/common/http';
import { Injectable, ɵConsole } from '@angular/core';




@Injectable()
export class AppareilService {
   appareilSubject = new Subject<any[]>();
   private appareils = [

      ];

      constructor(private httpClient: HttpClient) {}


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


    addAppareil(name: string, status: string) {
      const appareilObject = {
        id:0,
        name:'',
        status:''
      };
      appareilObject.name= name;
      appareilObject.status= status;
      appareilObject.id= this.appareils[(this.appareils.length - 1)].id + 1;
      
      
      this.appareils.push(appareilObject);
      this.onitAppareilSubject(); //ajout appareil a la liste
    }


saveAppareilsToServer() {
  this.httpClient.put('https://angularback-da9ac.firebaseio.com/appareils.json', this.appareils)
  .subscribe(
    ()=> {
      console.log('Enregistrement terminé');
    },
    (error) => {
      console.log('Erreur de sauvegarde !' + error);
    }
  )
}
getAppareilFromServer() {
  this.httpClient
  .get<any[]>('https://angularback-da9ac.firebaseio.com/appareils.json')
  .subscribe(
    (response) => {
      this.appareils = response;
      this.onitAppareilSubject();
    },
    (error) => {
      console.log('Erreur de chargement' +error);
    }
    );
}


}
