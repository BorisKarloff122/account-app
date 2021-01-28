import { Component, OnInit } from '@angular/core';
import {ValutesService} from '../../services/valutes.service';
import {Bill} from '../../../shared/interface/bill';
import {Rates} from '../../../shared/interface/rates';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  public valutes: Rates[] = [];
  public bill: Bill[] = [];
  public resDate!: string;
  private valutesNames = ['EUR', 'USD', 'UAH'];
  private cols = ['valutes', 'values', 'date'];

  constructor(
    private valute: ValutesService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getValues();
    this.registerIcons();
  }

  public getValues(): void {
    this.valute.requestValutes()
      .subscribe((res) => {
        this.resDate = res[1].date;
        this.valutes = Array(3)
          .fill(0)
          .map((i: Rates, x: number) => ({name: this.valutesNames[x], value: res[1].rates[this.valutesNames[x]]}));
        this.bill = Array(3)
          .fill(0)
          .map((i: Bill, x: number) => (
            { value: res[0].value * this.valutes[x].value, currency: this.valutesNames[x]}
          ));
    });
  }

  public registerIcons(): void {
    this.matIconRegistry.addSvgIcon(
      `usdd`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/usd.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `uah`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/uah.svg')
    );
  }

  public refresh(): void{
    this.valutes = [];
    this.bill = [];
    this.getValues();
  }
}
