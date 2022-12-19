import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginReturn } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'https://academic-planner-api.herokuapp.com/'

  private endpointJWT: string = 'https://serene-scrubland-02002.herokuapp.com/sign'

  constructor(private httpClient: HttpClient, private router: Router,

  ) { }

  sign(res: { email: string, password: string }): Observable<any> {

    return this.httpClient.post<LoginReturn>(this.baseUrl+'sessions', res).pipe(
      tap(data => {
        console.log(data)
        localStorage.removeItem('access_token')
        localStorage.removeItem('user_id')
        localStorage.setItem('access_token', data.auth_token)
        localStorage.setItem('user_id', (data.id).toString())

        return this.router.navigate(['dashboard'])

      })
    )
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate([''])

    return
  }


  public isAutenticated(): boolean {
    const token = localStorage.getItem('access_token')
    if (!token) return false
    const jwtHelper = new JwtHelperService()
    return !jwtHelper.isTokenExpired(token)


  }

  dadosUsuario(){

  }
}
