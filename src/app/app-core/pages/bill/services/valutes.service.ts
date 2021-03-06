import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {Valutes} from '../../../../shared/interface/valutes';
import {Bill} from '../../../../shared/interface/bill';


@Injectable({
  providedIn: 'root'
})

export class BillingService {
  private curLink = 'http://data.fixer.io/api/latest?access_key=156f43c852d2eb2cdca7a4ba965e720a';
  private billLink = '/bill';

  constructor(
    protected http: HttpClient
  ) { }

  public getValutes(): Observable<Valutes>{
    return this.http.get<Valutes>(this.curLink);
  }

  public getSaves(): Observable<Bill>{
    return this.http.get<Bill>(this.billLink);
  }

  public requestValutes(): Observable<[Bill, Valutes]>{
   return forkJoin<Bill, Valutes>([this.getSaves(), this.getValutes()]);
  }
}
