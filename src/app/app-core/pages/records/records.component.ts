import {Component, OnInit} from '@angular/core';
import { HistoryService } from '../history/services/history.service';
import { ICategory } from '../../../shared/interface/category';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { RemoveCategoryComponent } from './components/remove-category/remove-category.component';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  public cols: string[] = ['id', 'name', 'limit', 'edit', 'remove'];
  public data: ICategory[] | undefined;

  constructor(
    private historyService: HistoryService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void{
    this.getData();
  }

  public getData(): void{
    this.historyService.getCategories().subscribe((res) => {
      this.data = res;
    });
  }

  public createCategory(): void{
    this.dialog.open(CreateCategoryComponent, {width: '500px'})
      .afterClosed()
      .subscribe((formResponse) => {
      if (formResponse){
        this.getData();
      }
    });
  }

  public createEvent(): void{
    this.dialog.open(CreateEventComponent, {width: '500px'});
  }

  public editCategory(id): void{
    this.dialog.open(EditCategoryComponent, {width: '500px', data: {id}})
      .afterClosed()
      .subscribe( (res) => {
      if (res){
        this.getData();
      }
    });
  }

  public removeCategory(id, name): void{
    this.dialog.open(RemoveCategoryComponent, {width: '500px', data: {id, name}})
      .afterClosed()
      .subscribe((res) => {
      if (res){
        this.getData();
      }
    });
  }
}

