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
    

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule { }
