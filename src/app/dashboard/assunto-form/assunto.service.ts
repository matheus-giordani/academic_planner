import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {
  baseUrl = 'https://academic-planner-api.herokuapp.com/'
  constructor(private httpClient:HttpClient) { }




  postAssunto(body:any): Observable<any>{
    return this.httpClient.post(this.baseUrl + 'topics', body)
  }

  deleteAssunto(id:number){
    return this.httpClient.delete(this.baseUrl + 'topics/' + id + '/')
  }

  getAssunto(id:number): Observable<any>{
    return this.httpClient.get(this.baseUrl+ '/topics/'+ id)
  }

  patchAssunto(body: any, id:number){
    return this.httpClient.patch(this.baseUrl+ '/topics/'+ id, body)
  }
}
