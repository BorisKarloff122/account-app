import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  private baseUrl: string = environment.serverLink;
  private excludeUrl: string = 'http://data.fixer.io/api/latest?access_key=156f43c852d2eb2cdca7a4ba965e720a';
  private regExp: RegExp = new RegExp('\\?.*$');

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let params: RegExpExecArray | string[] = this.regExp.exec(req.urlWithParams);
    if (params === null){
      params = [''];
    }
    if (req.headers.get('origins')){
      const modifiedReq = req.clone({
        url: this.baseUrl + ('/users' + params[0])
      });
      return next.handle(modifiedReq);
    }
    else if (
      req.url.indexOf('localhost') === -1
      && req.url !== this.excludeUrl
      && req.url.indexOf('img') === -1
    ){
      const modReq = req.clone({
        url: this.baseUrl + req.url
      });
      return next.handle(modReq);
    }
    else{
      return next.handle(req);
    }
  }
}
