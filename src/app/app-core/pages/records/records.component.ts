import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecordsService} from './services/records.service';
import {IHistory} from '../../../shared/interface/history';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  public dataEvent: IHistory | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private RecService: RecordsService
  ) { }

  ngOnInit(): void {
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
