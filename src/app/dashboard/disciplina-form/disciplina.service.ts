import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disciplina, DisciplinaAssuntos } from './disciplina.interface';
import { SideBarDisciplina } from '../side-bar/side-bar.component';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private baseUrl = 'https://academic-planner-api.herokuapp.com/'
  sideBarDisciplinas = new BehaviorSubject<SideBarDisciplina[]>([])


  constructor(private httpClient:HttpClient) {
    this.getDisciplinas().subscribe()
  }


  cadastraDisciplina(body:Disciplina): Observable<any>{

    return this.httpClient.post(this.baseUrl + 'subjects', body).pipe(tap(() =>{
      this.getDisciplinas().subscribe()
    }))

  }

  getDisciplinas(): Observable<Disciplina[]> {
    return this.httpClient.get<Disciplina[]>(this.baseUrl+'subjects').pipe(tap(data =>{
     const sideBar =  data.map(el =>{
        const disciplina:SideBarDisciplina = {
          id:'1',
          label: el.name,
          icon: 'pi pi-fw pi-bars',
          styleClass: 'mt-3',
          routerLink: ['disciplina',el.id],

        }
        return disciplina
      })
      this.sideBarDisciplinas.next(sideBar)

    }))


  }

  getDisciplinasAssuntos(): Observable<DisciplinaAssuntos[]>{
    return this.httpClient.get<DisciplinaAssuntos[]>(this.baseUrl + 'todo')

  }
  getDisciplinaAssunto(id:number){
    return this.httpClient.get<DisciplinaAssuntos>(this.baseUrl + 'todo/' + id)
  }

  getDisciplinasList():Observable<any>{
    return this.httpClient.get(this.baseUrl + 'subjects' )

  }

  patchDisciplina(id:number, body:Disciplina): Observable<any>{
    return this.httpClient.patch(this.baseUrl + 'subjects/' + id, body)
  }

  getDisciplinaId(id:number): Observable<Disciplina>{
    return this.httpClient.get<Disciplina>(this.baseUrl + 'subjects/' + id)
  }
  deleteDisciplina(id:number): Observable<any>{
    return this.httpClient.delete(this.baseUrl + 'subjects/' + id)
  }


}
