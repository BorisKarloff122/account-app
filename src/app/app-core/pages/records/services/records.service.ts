import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHistory} from '../../../../shared/interface/history';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  public eventsLink = `${environment.serverLink}/events`;

  constructor(
    private http: HttpClient,
  ){}

  public getSingleEvent(id): Observable<IHistory>{
    return this.http.get<IHistory>(`${this.eventsLink}/${id}`);
  }
}
