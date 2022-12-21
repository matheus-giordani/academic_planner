import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { AuthGuard } from './auth-guard/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {path: 'dashboard',
    canActivateChild: [AuthGuard],
   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: '**', component: Error404Component}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
