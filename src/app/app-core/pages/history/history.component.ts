import { Component, OnInit } from '@angular/core';
import { IHistory } from '../../../shared/interface/history';
import { HistoryService } from './services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public dataSource!: IHistory[];

  constructor(
    private histService: HistoryService
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  public getEvents(): void {
    this.histService.getEvents().subscribe((res: IHistory[]) => {
      this.dataSource = res;
    });
  }
}
