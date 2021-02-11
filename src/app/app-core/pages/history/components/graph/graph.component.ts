import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../../services/history.service';
import {forkJoin} from 'rxjs';
import {ICategory} from '../../../../../shared/interface/category';
import {IHistory} from '../../../../../shared/interface/history';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  public dataSource: Array<object> = [];
  public options: object = {};
  public names: string[] =  [];
  public numbers: number[] = [];

  constructor(
    private historyService: HistoryService
  ){}

  ngOnInit(): void {
    this.getCatNames();
  }

  public getCatNames(): void{
    forkJoin([this.historyService.getCategories(), this.historyService.getSeparateCatOutcome()])
      .subscribe((res) => {
        res[0].forEach((i: ICategory, index: number) => {
          this.names.push(i.name);
        });
        res[1].forEach((i: IHistory, index: number) => {
          this.numbers[i.category] = typeof this.numbers[i.category] !== 'undefined'
            ? this.numbers[i.category] + i.amount
            : i.amount;
        });
        this.numbers.forEach((i, index: number) => {
          if (this.numbers[index] !== undefined){
            this.dataSource.push({name: this.names[index - 1], value: this.numbers[index]});
          }
        });
        this.makeChart();
      });
  }

  public makeChart(): void {
    this.options = {
      title: {
        text: 'Расходы',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: this.names
      },
      calculable: true,
      series: [
        {
          name: 'Расходы',
          type: 'pie',
          radius: [30, 110],
          roseType: 'area',
          data: this.dataSource
        }
      ]
    };
  }
}
