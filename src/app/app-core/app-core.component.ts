import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './app-core.component.html',
  styleUrls: ['./app-core.component.scss']
})
export class AppCoreComponent implements OnInit{

  constructor(
    private router: Router,
    private location: Location
  ){}

  ngOnInit(): void {
    if (this.location.path() === '/logged'){
      this.router.navigateByUrl('/logged/bill');
    }
  }

  public drawDrawer(elem): void{
    elem.toggle();
  }
}
