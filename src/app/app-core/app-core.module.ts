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
import {NamingPipe} from './pipes/naming.pipe';
import {GraphComponent} from './pages/history/components/graph/graph.component';
import {TableComponent} from './pages/history/components/table/table.component';

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
    GraphComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppCoreRoutingModule,
  ],
  providers: [LoginChildGuard, LoginGuard]
})
export class AppCoreModule { }
