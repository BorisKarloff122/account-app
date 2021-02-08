import {Component, OnInit} from '@angular/core';
import { HistoryService } from '../history/services/history.service';
import { ICategory } from '../../../shared/interface/category';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  public cols: string[] = ['id', 'name', 'limit', 'edit', 'remove'];
  public data: ICategory[] | undefined;


  constructor(
    private historyService: HistoryService
  ){}

  ngOnInit(): void{
    this.getData();
  }

  public getData(): void{
    this.historyService.getCategories().subscribe((res) => {
      this.data = res;
    });
  }

  public editCategory(id): void{

  }

  public removeCategory(id): void{

  }
}

