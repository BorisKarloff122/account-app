import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  private baseUrl: string = environment.serverLink;
  private regExp: RegExp = new RegExp('\\?.*$');

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let params: RegExpExecArray | string[] = this.regExp.exec(req.urlWithParams);
      if (params === null){
        params = [''];
      }
      if (req.headers.get('origins') === 'users'){
        const modifiedReq = req.clone({
          url: this.baseUrl + ('/users' + params[0])
        });
        return next.handle(modifiedReq);
      }
      else{
        return next.handle(req);
      }

  }
}
