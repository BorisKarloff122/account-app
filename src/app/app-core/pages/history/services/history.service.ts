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

  constructor(
    private http: HttpClient
  ) { }

  public getEvents(options): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(`${this.eventsLink}?${options}`);
  }


  public getSeparateCatOutcome(category): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(`${this.eventsLink}?type=outcome&category=${category}`);
  }

}


