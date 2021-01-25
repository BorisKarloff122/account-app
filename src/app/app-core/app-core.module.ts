import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component';
import { AppCoreRoutingModule} from './app-core-routing.module';
import {AppCoreComponent} from './app-core.component';


@NgModule({
  declarations: [TestComponent,   AppCoreComponent],
  imports: [
    CommonModule,
    AppCoreRoutingModule,
  ]
})
export class AppCoreModule { }
