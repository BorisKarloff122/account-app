import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../shared/interface/user';

@Injectable({
  providedIn: 'root'
})

export class UserAuthService {

  public baseUrl = '';

  constructor(
    private http: HttpClient
  ){}

  public checkIfUserExist(mail: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${mail}`, { headers: {origins: 'users'}});
  }

  public registerUser(regedUser: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/users`, regedUser, { headers: {origins: 'users'}});
  }

  public activeUser(logedUser: User): void{
    localStorage.setItem('activeUser', JSON.stringify(logedUser));
  }
}
