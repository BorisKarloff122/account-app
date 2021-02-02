import {Component, OnInit} from '@angular/core';
import {IHistory} from '../../../../../shared/interface/history';
import {ActivatedRoute, Router} from '@angular/router';
import {RecordsService} from '../../../records/services/records.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  public dataEvent: IHistory | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private RecService: RecordsService
  ) { }

  ngOnInit(): void{
    console.log(this.dataEvent);
    this.getSingleEvent();
  }

  public getSingleEvent(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.RecService.getSingleEvent(id).subscribe((res) => {
      this.dataEvent = res;
    });
  }

  public goBack(): void{
    this.router.navigateByUrl('/logged/history');
  }
}
