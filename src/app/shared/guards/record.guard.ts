import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()

export class RecordGuard implements CanActivate{
  constructor(private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    if (route.paramMap.get('id')) {
      return true;
    }
    else {
      this.router.navigateByUrl('history');
      return false;
    }


  }
}
