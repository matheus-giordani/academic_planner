import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordRecoverComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    

  ]
})
export class LoginModule { }
