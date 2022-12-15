import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.interface';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private baseUrl = 'https://academic-planner-api.herokuapp.com/'

  constructor(private httpClient:HttpClient) { }


  cadastraDisciplina(body:Disciplina): Observable<any>{

    return this.httpClient.post(this.baseUrl + 'subjects', body)

  }
}
