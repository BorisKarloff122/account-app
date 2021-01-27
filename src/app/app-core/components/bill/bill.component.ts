import { Component, OnInit } from '@angular/core';
import {ValutesService} from '../../services/valutes.service';
import {Bill} from '../../../shared/interface/bill';
import {Rates} from '../../../shared/interface/rates';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  public valutes: Rates[] = [];
  public bill: Bill[] = [];
  public resDate!: string;
  public displayedColumns = ['EUR', 'USD', 'UAH'];
  private valutesNames = ['EUR', 'USD', 'UAH'];


  constructor(
    private valute: ValutesService
  ) { }

  ngOnInit(): void {
    this.valute.requestValutes()
      .subscribe((res) => {
        this.bill.push(res[0]);
        this.resDate = res[1].date;
        this.valutes = Array(3)
          .fill(0)
          .map((i: Rates, x: number) => ({name: this.valutesNames[x], value: res[1].rates[this.valutesNames[x]]}));
        console.log(this.valutes, this.bill);
      });

  }

}
