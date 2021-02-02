import { Component, OnInit } from '@angular/core';
import {IHistory} from '../../../../../shared/interface/history';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {HistoryService} from '../../services/history.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public dataSource: IHistory[];
  public total!: number;
  public limitTo = 5;
  public pageN = 1;
  public cols: string[] = ['pos', 'sum', 'date', 'cat', 'type', 'action'];
  public data!: MatTableDataSource<any[]>;

  constructor(
    private router: Router,
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  public getEvents(): void {
    this.getTotalLength();
    this.historyService.getEvents(`_limit=${this.limitTo}&_page=${this.pageN}`).subscribe((res: IHistory[]) => {
      this.dataSource = res;
      this.setData();
    });
  }

  public getTotalLength(): void{
    this.historyService.getTotalLength().subscribe((res) => {
      this.total = res.length;
    });
  }

  public page(event: any): void{
    this.pageN = event.pageIndex + 1;
    this.limitTo = event.pageSize;
    this.getEvents();
  }

  public setData(): void{
    this.data = new MatTableDataSource(this.dataSource);
  }

  public inspect(id): void{
    this.router.navigateByUrl(`history/:${id}`);
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

}
