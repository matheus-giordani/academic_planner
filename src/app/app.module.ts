import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'

import {TieredMenuModule} from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { Error404Component } from './error404/error404.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LoginService } from './login/login/login.service';






@NgModule({
  declarations: [
    AppComponent,
    Error404Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TieredMenuModule,
    ButtonModule,
    HttpClientModule,
    ToastrModule







  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
