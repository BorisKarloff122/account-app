import { Router, CanLoad, Route, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()

export class LoginCanLoadGuard implements CanLoad{
  constructor(private router: Router){}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('activeUser') === null){

      this.router.navigateByUrl('auth');
      return false;
    }
    else{
      alert('forbidden');
      return true;
    }
  }
}
