import {User} from "../models/User.model";
import {Subject} from "rxjs";



export class UserService {
    private users: User[] =[
        {
            firstName: "Juliano",
            lastName: "Limoan",
            email: "juju@gmail.Com",
            hobbies: [
                'sport',
                'musique'
            ]
        }
    ];
    userSubject = new Subject<User[]>();


    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}