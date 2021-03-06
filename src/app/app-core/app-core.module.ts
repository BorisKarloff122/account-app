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
import {CorrectorPipe} from './pages/history/pipes/corrector.pipe';
import {NgxEchartsModule} from 'ngx-echarts';

import {RecordGuard} from '../shared/guards/record.guard';
import {EventComponent} from './pages/history/components/event/event.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateCategoryComponent } from './pages/records/components/create-category/create-category.component';
import { EditCategoryComponent } from './pages/records/components/edit-category/edit-category.component';
import { RemoveCategoryComponent } from './pages/records/components/remove-category/remove-category.component';
import { CreateEventComponent } from './pages/records/components/create-event/create-event.component';
import { RemoveEventComponent } from './pages/history/components/remove-event/remove-event.component';


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
    CorrectorPipe,
    EventComponent,
    CorrectorPipe,
    CreateCategoryComponent,
    EditCategoryComponent,
    RemoveCategoryComponent,
    CreateEventComponent,
    RemoveEventComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppCoreRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ReactiveFormsModule
  ],
  providers: [LoginChildGuard, LoginGuard, RecordGuard]
})
export class AppCoreModule { }
