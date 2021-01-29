import {Component, OnInit} from '@angular/core';
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
  public currencies: Rates[] = [];
  public bill: Bill[] = [];
  public resDate!: string;
  public showTables: boolean = false;
  private curNames = ['EUR', 'USD', 'UAH'];

  constructor(
    private valute: ValutesService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){}

  ngOnInit(): void {
    this.getValues();
    this.registerIcons();
  }

  public getValues(): void {
    this.valute.requestValutes()
      .subscribe((res) => {
        this.resDate = res[1].date;
        this.currencies = Array(3)
          .fill(0)
          .map((i: Rates, x: number) => (
            {name: this.curNames[x], value: res[1].rates[this.curNames[x]]}
            )
          );
        this.bill = Array(3)
          .fill(0)
          .map((i: Bill, x: number) => (
            {value: res[0].value * this.currencies[x].value, currency: this.curNames[x]}
            )
          );
        this.showTables = true;
    });
  }

  public registerIcons(): void {
    this.matIconRegistry.addSvgIcon(
      `USD`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/usd.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `UAH`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/uah.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `EUR`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/euro.svg')
    );
  }

  public refresh(): void{
    this.showTables = false;
    this.getValues();
  }
}
