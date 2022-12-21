
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Revisao } from './revisao.interface';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private baseUrl = 'https://academic-planner-api.herokuapp.com/'

  constructor(private http:HttpClient) { }


  getRevisao(): Observable<Revisao[]>{
    return this.http.get<Revisao[]>(this.baseUrl + 'notifications')

  }
}
