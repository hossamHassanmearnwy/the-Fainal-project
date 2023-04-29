import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserAuthService } from '../services/user-auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserAuthheGuard implements CanActivate {
  constructor(private router: Router,private userService:UserAuthService, private jwtHelper: JwtHelperService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('currentUser');
      console.log(token);
      
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(token);
      
      console.log("dashhhhhhhh");
      return true;

    }else{
      console.log("please login first");
      
      alert("please login first");
      this.router.navigate(['/Login']);
    return false;
    }
    
  }




  
    }
  






