import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../../../shared/interface/bill';

@Component({
  selector: 'app-savings-table',
  templateUrl: './savings-table.component.html',
  styleUrls: ['./savings-table.component.scss']
})
export class SavingsTableComponent implements OnInit {
  @Input() public bill!: Bill;
  constructor(){}

  ngOnInit(): void {
  }

}
