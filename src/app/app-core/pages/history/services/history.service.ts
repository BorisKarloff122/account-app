import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {IHistory} from '../../../../shared/interface/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public historyLink = `${environment.serverLink}/history`;

  constructor(
    private http: HttpClient
  ) { }

  public getHistory(): Observable<IHistory>{
    return this.http.get<IHistory>(`${this.historyLink}`);
  }
}


