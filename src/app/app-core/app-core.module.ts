import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCoreComponent} from './app-core.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {AppCoreRoutingModule} from './app-core-routing.module';
import {MaterialModule} from '../shared/material/material.module';
import {BillComponent} from './pages/bill/bill.component';
import {HistoryComponent} from './pages/history/history.component';
import {RecordsComponent} from './pages/records/records.component';
import {LoginChildGuard} from '../shared/guards/LoginChild.guard';
import {LoginGuard} from '../shared/guards/login.guard';
import {CurrencyTableComponent} from './pages/bill/components/currency-table/currency-table.component';
import {SavingsTableComponent} from './pages/bill/components/savings-table/savings-table.component';
import { NamingPipe } from './pipes/naming.pipe';

@NgModule({
  declarations: [
    AppCoreComponent,
    HeaderComponent,
    SidebarComponent,
    BillComponent,
    HistoryComponent,
    RecordsComponent,
    CurrencyTableComponent,
    SavingsTableComponent,
    NamingPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppCoreRoutingModule,
  ],
  providers: [LoginChildGuard, LoginGuard]
})
export class AppCoreModule { }
