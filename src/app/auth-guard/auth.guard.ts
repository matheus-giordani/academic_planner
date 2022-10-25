import { LoginService } from './../login/login/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(public router: Router, public loginService: LoginService){

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.loginService.isAutenticated()){
      this.router.navigate(['404'])
      console.log('entrou aqui')
      return false

    }
    else{

      this.router.navigate(['dashboard'])
      return true;
    }

  }

}
