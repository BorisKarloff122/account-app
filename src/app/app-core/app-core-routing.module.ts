import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppCoreComponent} from './app-core.component';
import {BillComponent} from './components/bill/bill.component';
import {HistoryComponent} from './components/history/history.component';
import {RecordsComponent} from './components/records/records.component';
import {LoginGuard} from '../shared/guards/login.guard';
import {LoginChildGuard} from '../shared/guards/LoginChild.guard';
import {LoginCanLoadGuard} from '../shared/guards/loginCanLoad.guard';






const routes: Routes = [
  { path: 'logged',    canActivate: [LoginGuard],
    canActivateChild: [LoginChildGuard],
    canLoad: [LoginCanLoadGuard],
    component: AppCoreComponent, children: [
      { path: 'bill', component: BillComponent},
      { path: 'history', component: HistoryComponent},
      { path: 'records', component: RecordsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
