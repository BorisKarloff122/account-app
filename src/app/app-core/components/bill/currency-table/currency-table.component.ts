import {Component, Input, OnInit} from '@angular/core';
import {Rates} from '../../../../shared/interface/rates';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {
  @Input() public currency!: Rates[];
  @Input() public date!: string;
  public cols = ['valutes', 'values', 'date'];
  constructor() { }

  ngOnInit(): void {
  }



}
