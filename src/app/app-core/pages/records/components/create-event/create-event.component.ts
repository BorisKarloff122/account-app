import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HistoryService } from '../../../history/services/history.service';
import { RecordsService } from '../../services/records.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  public formEvent!: FormGroup;
  public isSubmited: boolean = false;
  public names: string[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateEventComponent>,
    private historyService: HistoryService,
    private recordsService: RecordsService
  ){}

  ngOnInit(): void {
    this.getNames();
  }

  public getNames(): void{
    this.buildForm();
    this.historyService.getCategories()
      .subscribe((res) => {
          res.forEach((i, item) => {
              this.names.push(res[item].name);
         });
     });
  }

  public buildForm(): void{
      this.formEvent = this.fb.group(
        {
          category: ['', Validators.required],
          type: [false, Validators.required],
          amount: ['', [Validators.required, Validators.min(1)]],
          description: ['', Validators.required]
        }
      );
  }

  public close(): void{
    this.isSubmited = false;
    this.dialogRef.close();
  }

  public submit(): void{
    this.isSubmited = true;
    if (this.formEvent.valid){
      this.formEvent.value.date = new Date();
      this.recordsService.createEvent(this.formEvent.value)
        .subscribe();
      this.dialogRef.close('ok');
    }
  }

  get formControls(): {[p: string]: AbstractControl}{
    return this.formEvent.controls;
  }
}
