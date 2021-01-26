import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './app-core.component.html',
  styleUrls: ['./app-core.component.scss']
})
export class AppCoreComponent implements OnInit{

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.router.navigateByUrl('/logged/bill');
  }

  public drawDrawer(elem): void{
    elem.toggle();
  }
}
