
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private baseUrl = 'https://academic-planner-api.herokuapp.com/'

  constructor(private http:HttpClient) { }


  getRevisao(): Observable<any>{
    return this.http.get(this.baseUrl + 'notifications')

  }
}
