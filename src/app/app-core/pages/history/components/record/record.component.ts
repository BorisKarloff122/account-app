import { Component, Inject, OnInit } from '@angular/core';
import {IHistory} from '../../../../../shared/interface/history';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  public dataEvent: IHistory | undefined;

  constructor(
    private dialogRef: MatDialogRef<RecordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IHistory
  ){}

  ngOnInit(): void {
    this.reasignData();
  }

  public reasignData(): void{
    this.dataEvent = this.data;
  }

  public close(): void{
    this.dialogRef.close();
  }

  public goBack(): void{
    this.dialogRef.close();
  }

}
