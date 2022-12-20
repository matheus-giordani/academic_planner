import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { NgxSpinnerModule } from "ngx-spinner";
import {DialogModule} from 'primeng/dialog';

import {TieredMenuModule} from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { Error404Component } from './error404/error404.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LoginService } from './login/login/login.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RequestInterceptor } from './request-interceptor.service';






@NgModule({
  declarations: [
    AppComponent,
    Error404Component,

  ],
  exports: [NgxSpinnerModule]
  ,
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TieredMenuModule,
    DialogModule,
    ButtonModule,
    HttpClientModule,
    ToastrModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    ToastrModule.forRoot(),








  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
   }
  ],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
