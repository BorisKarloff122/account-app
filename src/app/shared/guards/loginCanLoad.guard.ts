import { Router, CanLoad, Route, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
@Injectable()

export class LoginCanLoadGuard implements CanLoad{
  constructor(
    private router: Router,
    private location: Location
  ){}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('activeUser') !== null){
      return true;
      }
      else{
      alert('forbiden');
    }
    return false;
  }
}
