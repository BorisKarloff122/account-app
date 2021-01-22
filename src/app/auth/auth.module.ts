import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {AuthComponent} from './auth.component';
import {MatIconModule} from '@angular/material/icon';
import {AuthFormComponent} from './components/auth-form/auth-form.component';
import {RegFormComponent} from './components/reg-form/reg-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthRoutingModule} from './auth-routing.module';


@NgModule({
  declarations: [
    AuthComponent,
    AuthFormComponent,
    RegFormComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule{}
