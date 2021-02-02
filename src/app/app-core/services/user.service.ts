import {Injectable} from '@angular/core';
import {User} from '../../shared/interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public userGetter(): User{
    return JSON.parse(localStorage.getItem('activeUser'));
  }

  public logOut(): void{
   localStorage.removeItem('activeUser');
  }
}
