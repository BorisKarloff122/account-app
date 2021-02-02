import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {IHistory} from '../../../../shared/interface/history';
import { ICategory } from '../../../../shared/interface/category';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public eventsLink = `${environment.serverLink}/events`;
  public catLink = `${environment.serverLink}/categories`

  constructor(
    private http: HttpClient
  ) { }

  public getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.catLink);
  }

  public getEvents(options: string): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(`${this.eventsLink}?${options}`);
  }

  public getTotalLength(): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(`${this.eventsLink}`);
  }

  public getSeparateCatOutcome(category: number): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(`${this.eventsLink}?type=outcome&category=${category}`);
  }

}


