import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppCoreComponent} from './app-core.component';
import {BillComponent} from './components/bill/bill.component';
import {HistoryComponent} from './components/history/history.component';
import {RecordsComponent} from './components/records/records.component';



const routes: Routes = [
  { path: 'logged', component: AppCoreComponent, children: [
      { path: 'bill', component: BillComponent },
      { path: 'history', component: HistoryComponent},
      { path: 'records', component: RecordsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
