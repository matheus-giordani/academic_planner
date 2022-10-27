import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 {path: '', component: LoginComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'recover', component: PasswordRecoverComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
