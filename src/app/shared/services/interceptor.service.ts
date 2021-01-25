import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  public baseUrl: string = environment.serverLink;

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (environment.name === 'base'){
        const modifiedReq = req.clone({
          url: this.baseUrl
        });
        return next.handle(modifiedReq);
      }

  }
}
