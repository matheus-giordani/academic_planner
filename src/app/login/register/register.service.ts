import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from './cadastro.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'https://academic-planner-api.herokuapp.com/'

  cadastroUsuario(body:any): Observable<any>{
    return this.httpClient.post(this.baseUrl + 'users', body)

  }
}
