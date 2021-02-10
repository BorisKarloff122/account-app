import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './shared/components/header/header.component';
import {MaterialModule} from './shared/material/material.module';
import {InterceptorService} from './shared/services/interceptor/interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoginGuard} from './shared/guards/login.guard';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LoginCanLoadGuard} from './shared/guards/loginCanLoad.guard';
import {AlertWindowComponent} from './components/alert-window/alert-window.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    AlertWindowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [InterceptorService,
    LoginGuard,
    LoginCanLoadGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
