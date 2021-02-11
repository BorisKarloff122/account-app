import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RecordsService } from '../../services/records.service';

@Component({
  selector: 'app-remove-category',
  templateUrl: './remove-category.component.html',
  styleUrls: ['./remove-category.component.scss']
})
export class RemoveCategoryComponent{

  public name: string = this.data.name;
  public id: number = this.data.id;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number, name: string},
    private dialogRef: MatDialogRef<RemoveCategoryComponent>,
    private recordsService: RecordsService
  ){}

  public close(): void{
    this.dialogRef.close();
  }

  public remove(): void{
    this.recordsService.removeCategory(this.id).subscribe();
    this.dialogRef.close('ok');
  }

}
