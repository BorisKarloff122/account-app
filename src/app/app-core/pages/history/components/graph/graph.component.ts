import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../../services/history.service';

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

  public countData(): void{
   this.historyService.getSeparateCatOutcome().subscribe((res) => {

    });
  }

  public getCatNames(): void{
    this.historyService.getCategories().subscribe( (res) => {
      res.forEach((i, items) => {
        this.names.push(i.name);
      });
      this.countData();
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
