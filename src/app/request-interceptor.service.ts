import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          const token = localStorage.getItem('access_token')
          if(token){
            req = req.clone({
                headers: req.headers.set('Authorization', token) //setar os headers que você quer
            });
            return next.handle(req);

          }
          else{
            req = req.clone({
              headers: req.headers.set('Authorization', 'não encontrado') //setar os headers que você quer
          });
          return next.handle(req);


          }
    }
}
