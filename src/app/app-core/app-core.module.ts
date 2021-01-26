import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCoreComponent } from './app-core.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppCoreRoutingModule } from './app-core-routing.module';
import {MaterialModule} from '../shared/material/material.module';
import { BillComponent } from './components/bill/bill.component';
import { HistoryComponent } from './components/history/history.component';
import { RecordsComponent } from './components/records/records.component';



@NgModule({
  declarations: [AppCoreComponent, HeaderComponent, SidebarComponent, BillComponent, HistoryComponent, RecordsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppCoreRoutingModule,
  ]
})
export class AppCoreModule { }
