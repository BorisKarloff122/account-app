import { Component, OnInit } from '@angular/core';
import { IHistory } from '../../../../../shared/interface/history';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordsService } from '../../../records/services/records.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  public dataEvent: IHistory | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private RecordService: RecordsService
  ){}

  ngOnInit(): void{
    this.getSingleEvent();
  }

  public getSingleEvent(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.RecordService.getSingleEvent(id.replace(':', '')).subscribe((res) => {
      this.dataEvent = res;
    });
  }

  public goBack(): void{
    this.router.navigateByUrl('/logged/history');
  }

}
