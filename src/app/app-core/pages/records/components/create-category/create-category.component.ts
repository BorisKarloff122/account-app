import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RecordsService } from '../../services/records.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  public formCategory: FormGroup | undefined;
  public isSubmited: boolean = false;
  @Output() refreshCats = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateCategoryComponent>,
    private recordsService: RecordsService,
    private loc: Location
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void{
    this.formCategory = this.fb.group({
        name: ['', Validators.required],
        capacity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  public submitForm(): void{
    this.isSubmited = true;
    if (this.formCategory.valid){
        this.recordsService.createCategory(this.formCategory.value).subscribe();
        if (this.loc.path() === '/records' ){
          this.dialogRef.close(this.formCategory.value);
        }
        else{
          this.dialogRef.close();
        }
    }
  }

  public close(): void{
    this.dialogRef.close();
  }

  get formControls(): {[p: string]: AbstractControl} {
    return this.formCategory.controls;
  }
}
