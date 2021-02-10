import {Injectable} from '@angular/core';
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
    return this.http.get<IHistory>(`${this.eventsLink}/${id}`);
  }

  public getSingleCategory(id: number): Observable<ICategory>{
    return this.http.get<ICategory>(`${this.catLink}/${id}`);
  }

  public createEvent(event: IHistory): Observable<IHistory>{
    return this.http.post<IHistory>(`${this.eventsLink}`, event);
  }

  public patchCategory(cat: number, form: ICategory): Observable<ICategory>{
    return this.http.patch<ICategory>(`${this.catLink}/${cat}`, form);
  }

  public createCategory(cat: ICategory): Observable<ICategory>{
    return this.http.post<ICategory>(`${this.catLink}`, cat);
  }

  public removeCategory(cat): Observable<ICategory>{
    return this.http.delete<ICategory>(`${this.catLink}/${cat}`);
  }
}
