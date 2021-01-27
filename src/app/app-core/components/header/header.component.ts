import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuToggle: boolean = false;
  @Output() toggleDrawer = new EventEmitter<string>();
  constructor(
    private userServ: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public logOut(): void{
    this.userServ.logOut();
    this.router.navigateByUrl('auth');
    console.log('leaving');
  }

  public drawer(): void{
    this.menuToggle = !this.menuToggle;
    this.toggleDrawer.emit();
  }
}
