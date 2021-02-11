import {Component, OnInit} from '@angular/core';
import {IHistory } from '../../../../../shared/interface/history';
import {ActivatedRoute, Router} from '@angular/router';
import {RecordsService} from '../../../records/services/records.service';
import {HistoryService} from '../../services/history.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  public dataEvent: IHistory | undefined;
  public catNames: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private RecordService: RecordsService,
    private historyService: HistoryService
  ){}

  ngOnInit(): void{
    this.getSingleEvent();
    this.getCatNames();
  }

  public getCatNames(): void{
      this.historyService.getCategories().subscribe((res) => {
        const catNames: string[] = [];
        res.forEach((i, index) => {
          catNames.push(res[index].name);
        });
        this.catNames = catNames;
      });
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
