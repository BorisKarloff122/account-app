import {Component, Inject, OnInit} from '@angular/core';
import {HistoryService} from '../../services/history.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-remove-event',
  templateUrl: './remove-event.component.html',
  styleUrls: ['./remove-event.component.scss']
})
export class RemoveEventComponent implements OnInit {

  public name: number = this.data.id;

  constructor(
    private historyService: HistoryService,
    private dialogRef: MatDialogRef<RemoveEventComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {id: number}
  ) { }

  ngOnInit(): void {
  }

  public close(): void{
    this.dialogRef.close();
  }

  public remove(): void{
    this.historyService.removeEvent(this.name).subscribe();
    this.dialogRef.close('ok');
  }
}
