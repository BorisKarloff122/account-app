import {Component, Input} from '@angular/core';
import {Rates} from '../../../../../shared/interface/rates';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent {
  @Input() public currency!: Rates[];
  @Input() public date!: string;
  public cols = ['currencies', 'values', 'date'];
  constructor() {}
}
