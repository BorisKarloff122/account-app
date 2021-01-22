import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../shared/interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  public baseUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient
  ) { }

  public checkIfUserExist(mail: string): Observable<Array<User>>{
    return  this.http.get<Array<User>>(`${this.baseUrl}?email=${mail}`);
  }

  public registrateUser(regedUser): void{
    this.http.post<User>(`${this.baseUrl}`, regedUser)
      .subscribe();
  }
}
