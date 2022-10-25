import { DisciplinaCardComponent } from './disciplina-card/disciplina-card.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { AssuntoFormComponent } from './assunto-form/assunto-form.component';
import { PageUserComponent } from './page-user/page-user.component';



const routes: Routes = [
  {path:'', component: DashboardComponent,
  children: [
    {path:'disciplina', component: DisciplinaFormComponent},
    {path:'assunto', component: AssuntoFormComponent},
    {path:'user', component: PageUserComponent},
    {path:'disciplina/:id', component: DisciplinaCardComponent},


  ]
    }
  ]




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
