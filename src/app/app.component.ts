import { Component, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot, Route, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title: string = 'Accounting-app';

  constructor(
    private router: Router,
    private location: Location
  ){}

  ngOnInit(): void {
    if (this.location.path() === ''){
      this.router.navigate(['../auth']);
    }
  }
}
