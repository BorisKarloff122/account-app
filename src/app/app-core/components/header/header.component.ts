import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuToggle: boolean = false;
  @Output() toggleDrawer = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  public drawer(): void{
    this.menuToggle = !this.menuToggle;
    this.toggleDrawer.emit();
  }
}
