import { CalendarComponent } from './calendar/calendar.component';
import { DisciplinaCardComponent } from './disciplina-card/disciplina-card.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { AssuntoFormComponent } from './assunto-form/assunto-form.component';
import { PageUserComponent } from './page-user/page-user.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';



const routes: Routes = [
  {path:'', component: DashboardComponent,
  children: [


    {path:'', component: CalendarComponent},
    {path:'disciplina', component: DisciplinaFormComponent},
    {path:'assunto', component: AssuntoFormComponent},
    {path:'user', component: PageUserComponent},
    {path:'ToDo', component: ToDoListComponent},
    {path:'disciplina/:id', component: DisciplinaCardComponent},


  ]
    }
  ]




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
