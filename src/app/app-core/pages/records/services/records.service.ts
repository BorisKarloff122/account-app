import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHistory} from '../../../../shared/interface/history';
import { ICategory } from '../../../../shared/interface/category';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  public eventsLink = `/events`;
  public catLink = '/categories';

  constructor(
    private http: HttpClient,
  ){}

  public getSingleEvent(id: string): Observable<IHistory>{
    console.log('stuff');
    return this.http.get<IHistory>(`${this.eventsLink}/${id}`);
  }

  public submitForm(form): void{
    this.http.post<IHistory>(`${this.eventsLink}`, form).subscribe();
  }

  public createCategory(cat): void{
    this.http.post<ICategory>(`${this.catLink}`, cat).subscribe();
  }
}
