import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

// primeng
import { SideBarComponent } from './side-bar/side-bar.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule, DateAdapter } from 'angular-calendar';



@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TieredMenuModule,
    ButtonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),



  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule { }
