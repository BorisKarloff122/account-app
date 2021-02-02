import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppCoreComponent} from './app-core.component';
import {BillComponent} from './pages/bill/bill.component';
import {HistoryComponent} from './pages/history/history.component';
import {RecordsComponent} from './pages/records/records.component';
import {RecordComponent} from './pages/history/components/record/record.component';
import {GeneralInfoComponent} from './pages/history/components/general-info/general-info.component';
import { RecordGuard } from '../shared/guards/record.guard';

const routes: Routes = [
  {path: '', component: AppCoreComponent, children: [
      {path: 'bill', component: BillComponent},
      {path: 'history', component: HistoryComponent, children: [
          {path: '', component: GeneralInfoComponent, outlet: 'history'},
        ]},
      {path: 'record', canActivate: [RecordGuard], component: RecordComponent},
      {path: 'records', component: RecordsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
