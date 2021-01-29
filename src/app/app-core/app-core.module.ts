import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCoreComponent} from './app-core.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {AppCoreRoutingModule} from './app-core-routing.module';
import {MaterialModule} from '../shared/material/material.module';
import {BillComponent} from './components/bill/bill.component';
import {HistoryComponent} from './components/history/history.component';
import {RecordsComponent} from './components/records/records.component';
import {LoginChildGuard} from '../shared/guards/LoginChild.guard';
import {LoginGuard} from '../shared/guards/login.guard';
import {CurrencyTableComponent} from './components/bill/currency-table/currency-table.component';
import {SavingsTableComponent} from './components/bill/savings-table/savings-table.component';

@NgModule({
  declarations: [
    AppCoreComponent,
    HeaderComponent,
    SidebarComponent,
    BillComponent,
    HistoryComponent,
    RecordsComponent,
    CurrencyTableComponent,
    SavingsTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppCoreRoutingModule,
  ],
  providers: [LoginChildGuard, LoginGuard]
})
export class AppCoreModule { }
