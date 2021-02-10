import { Component, Inject, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RecordsService } from '../../services/records.service';
import { ICategory } from '../../../../../shared/interface/category';
import { HistoryService } from '../../../history/services/history.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  public category!: ICategory;
  public names: string[] = [];
  public capacities: number[] = [];
  public formEditCategory!: FormGroup;
  public value: string = '';
  public selectedCapacity: string = '' + this.capacities[this.names.indexOf(this.value) + 1];
  public isSubmited: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<EditCategoryComponent>,
    private fb: FormBuilder,
    private historyService: HistoryService,
    private recordsService: RecordsService,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}
  ){}

  ngOnInit(): void {
    this.getData();
  }

  public changeValue(): void{
    this.selectedCapacity = '' + this.capacities[this.names.indexOf(this.value)];
  }

  public buildForm(): void{
      this.formEditCategory = this.fb.group(
        {
          name: [this.value, Validators.required],
          capacity: [this.selectedCapacity, [Validators.required, Validators.min(1)]]
        }
      );
  }

  public close(): void{
    this.dialogRef.close();
  }

  public submit(): void{
    this.isSubmited = true;
    if (this.formEditCategory.valid){
      this.recordsService
        .patchCategory((this.names.indexOf(this.value) + 1), this.formEditCategory.value)
        .subscribe(() => {
          this.dialogRef.close('ok');
        });
    }
  }

  public getData(): void {
    const result: Observable<[ICategory[], ICategory]> = forkJoin<ICategory[], ICategory>(
      [this.historyService.getCategories(),
        this.recordsService.getSingleCategory(this.data.id)
      ]);
    result.subscribe((res) => {
        res[0].forEach((i, index) => {
          this.names.push(res[0][index].name);
          this.capacities.push(res[0][index].capacity);
        });
        this.category = res[1];
        this.value = this.category.name;
        this.selectedCapacity = '' + this.capacities[this.names.indexOf(this.value)];
        this.buildForm();
    });
  }

  get formControls(): {[p: string]: AbstractControl} {
    return this.formEditCategory.controls;
  }
}
