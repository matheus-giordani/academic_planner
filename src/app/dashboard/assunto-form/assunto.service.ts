import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {
  baseUrl = 'https://academic-planner-api.herokuapp.com/'
  constructor(private httpClient:HttpClient) { }

  getDisciplinas():Observable<any>{
    return this.httpClient.get(this.baseUrl + 'subjects' )

  }

  postAssunto(body:any): Observable<any>{
    return this.httpClient.post(this.baseUrl + 'topics', body)
  }
}
