import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {IHistory} from '../../../../shared/interface/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public eventsLink = `${environment.serverLink}/events`;
  public catsLink = `${environment.serverLink}/categories`;

  constructor(
    private http: HttpClient
  ) { }

  public getEvents(): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(`${this.eventsLink}`);
  }
  public getSingleEvent(id): Observable<IHistory>{
    return this.http.get<IHistory>(`${this.eventsLink}/${id}`);
  }

  public getSeparateCatOutcome(category): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(`${this.eventsLink}?type=outcome&category=${category}`);
  }

}


