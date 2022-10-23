import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpointJWT: string = 'http://localhost:3000/sign'

  constructor(private httpClient: HttpClient, private router: Router,
    // private toastr: ToastrService
    ) { }

  sign(res: { email: string, senha: string }): Observable<any> {
    console.log(res)
     return this.httpClient.post<{token: string}>(this.endpointJWT, res).pipe(
      map(data => {
        localStorage.removeItem('access_token')
        localStorage.setItem('access_token', JSON.stringify(data.token))
        return this.router.navigate(['dashboard'])

      }),
       catchError(err => {
        console.log(err)
        if(err.error.message) return throwError(() => err.error.message)

        return throwError(() => 'erro no servidor')
      })
    )
  }

  logout(){
    localStorage.removeItem('access_token');
    this.router.navigate([''])
    // return this.toastr.success('Hello world!', 'Toastr fun!');
    return
  }
}
