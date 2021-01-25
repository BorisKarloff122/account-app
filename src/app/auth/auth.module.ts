import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {AuthComponent} from './auth.component';
import {AuthFormComponent} from './components/auth-form/auth-form.component';
import {RegFormComponent} from './components/reg-form/reg-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthRoutingModule} from './auth-routing.module';
import {AppCoreModule} from '../app-core/app-core.module';
import {AppCoreRoutingModule} from '../app-core/app-core-routing.module';
import {MaterialModule} from '../shared/material/material.module';


@NgModule({
  declarations: [
    AuthComponent,
    AuthFormComponent,
    RegFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppCoreModule,
    AuthRoutingModule,
    AppCoreRoutingModule,
  ],
})
export class AuthModule{}
