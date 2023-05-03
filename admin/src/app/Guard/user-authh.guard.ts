import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserAuthService } from '../services/user-auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SweetAlertService } from '../services/sweet-alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthheGuard implements CanActivate {
  constructor(private router: Router,private userService:UserAuthService, private jwtHelper: JwtHelperService,private sweetAlertService: SweetAlertService){}
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
      
      this.sweetAlertService.showError('You need to log in to access this page.');
      this.router.navigate(['/Login']);
    return false;
    }
    
  }




  
    }
  






