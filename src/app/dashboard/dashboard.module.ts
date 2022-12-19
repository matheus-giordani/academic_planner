import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { AssuntoFormComponent } from './assunto-form/assunto-form.component';
import { DisciplinaCardComponent } from './disciplina-card/disciplina-card.component';
import { PageUserComponent } from './page-user/page-user.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {NgbdModalContent } from './calendar/modal/modal.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalTodoComponent } from './to-do-list/modal-todo/modal-todo.component';




@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    CalendarComponent,
    DisciplinaFormComponent,
    AssuntoFormComponent,
    DisciplinaCardComponent,
    PageUserComponent,
    ToDoListComponent,
    NgbdModalContent,
    ModalTodoComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TieredMenuModule,
    ButtonModule,
    NgxSpinnerModule,

    ReactiveFormsModule,
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
