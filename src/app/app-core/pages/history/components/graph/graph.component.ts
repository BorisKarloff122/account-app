import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../../services/history.service';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  public dataSource = [];
  public graphList: number[] = [1, 2, 3];
  public options: object = {};
  public names: string[] =  ['Дом', 'Еда', 'Машина'];

  constructor(
    private historyService: HistoryService
  ){}

  ngOnInit(): void {
    this.countData();
  }

  public countData(): void{
    this.graphList.forEach((i: number, index: number) => {
        this.historyService.getSeparateCatOutcome(i).subscribe((res) => {
          let cat = 0;
          res.forEach((j, itter: number) => {
            cat = cat + j.amount;
          });
          this.dataSource.push({name: this.names[index], value: cat});
          this.makeChart();
        });
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
