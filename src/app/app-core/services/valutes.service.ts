import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {Valutes} from '../../shared/interface/valutes';
import {Bill} from '../../shared/interface/bill';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ValutesService {
  private valutesLink = 'http://data.fixer.io/api/latest?access_key=156f43c852d2eb2cdca7a4ba965e720a';
  private billLink = `${environment.serverLink}/bill`;

  constructor(
    protected http: HttpClient
  ) { }

  public getValutes(): Observable<Valutes>{
    return this.http.get<Valutes>(this.valutesLink);
  }

  public getSaves(): Observable<Bill>{
    return this.http.get<Bill>(this.billLink);
  }

  public requestValutes(): Observable<[Bill, Valutes]>{
   return forkJoin<Bill, Valutes>([this.getSaves(), this.getValutes()]);
  }
}
