import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppCoreComponent} from './app-core.component';
import {BillComponent} from './pages/bill/bill.component';
import {HistoryComponent} from './pages/history/history.component';
import {RecordsComponent} from './pages/records/records.component';
import {RecordGuard} from '../shared/guards/record.guard';
import {EventComponent} from './pages/history/components/event/event.component';

const routes: Routes = [
  {path: '', component: AppCoreComponent, children: [
      {path: 'bill', component: BillComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'history/:id', canActivate: [RecordGuard], component: EventComponent},
      {path: 'records', component: RecordsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
