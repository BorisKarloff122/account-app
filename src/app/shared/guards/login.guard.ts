import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()

export class LoginGuard implements CanActivate{
  constructor(private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
      if (localStorage.getItem('activeUser') === null){
        this.router.navigateByUrl('auth');
        return false;
      }
      else{
        return true;
      }
  }
}
