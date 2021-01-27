import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()

export class LoginChildGuard implements CanActivateChild{
  constructor(private router: Router){}
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    if (localStorage.getItem('activeUser') === null){
      this.router.navigateByUrl('auth');
      return false;
    }
    else{
      return true;
    }
  }
}
