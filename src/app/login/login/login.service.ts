import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpointJWT: string = 'http://localhost:3000/sign'

  constructor(private httpClient: HttpClient, private router: Router,

  ) { }

  sign(res: { email: string, senha: string }): Observable<any> {

    return this.httpClient.post<{ token: string }>(this.endpointJWT, res).pipe(
      map(data => {
        localStorage.removeItem('access_token')
        localStorage.setItem('access_token', data.token)
        return this.router.navigate(['dashboard'])

      }),
      catchError(err => {

        if (err.error.message) return throwError(() => err.error.message)

        return throwError(() => 'erro no servidor')
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
}
