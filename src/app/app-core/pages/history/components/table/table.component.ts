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
  public cols: string[] = ['pos', 'date', 'cat', 'type', 'action'];
  public data!: MatTableDataSource<any[]>;
  constructor(
    private router: Router,
    private histService: HistoryService
  ) { }

  public getEvents(ev?: any): void {
    this.histService.getEvents(`_limit=${this.limitTo}&_page=${this.pageN}`).subscribe((res: IHistory[]) => {
      this.dataSource = res;
      if (ev){
        this.pageN = ev.pageIndex + 1;
        this.total = res.length + 1;
        this.limitTo = ev.pageSize;
      }
      this.setData();
    });
  }

  ngOnInit(): void {
    this.getEvents();
  }

  public setData(): void{
    this.data = new MatTableDataSource(this.dataSource);
  }

  public inspect(id): void{
    this.router.navigate(['/logged/records', {id}]);
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

}
