import {Component, Input} from '@angular/core';
import {Bill} from '../../../../../shared/interface/bill';

@Component({
  selector: 'app-savings-table',
  templateUrl: './savings-table.component.html',
  styleUrls: ['./savings-table.component.scss']
})
export class SavingsTableComponent {
  @Input() public bill!: Bill[];
  public cols = ['name', 'value'];
  constructor(){}
}
