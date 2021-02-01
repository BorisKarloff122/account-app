import { Component, Input, OnInit } from '@angular/core';
import {IHistory} from '../../../../../shared/interface/history';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource: IHistory[];
  public cols: string[] = ['pos', 'date', 'cat', 'type', 'action'];
  public data!: MatTableDataSource<any[]>;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  public getEvents(): void{
    this.data = new MatTableDataSource(this.dataSource);
  }

  public inspect(): void{

  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

}
