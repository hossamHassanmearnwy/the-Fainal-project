import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserAuthService } from './user-auth.service';

type NewType = any;

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: UserAuthService) {} 
 intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {  
    const token = this.authService.IsLogin;

  //  if (token) {
    //console.log(token);
    
     // If we have a token, we set it to the header
     const newReq = request.clone({
         headers:request.headers
        .append('authorization', token || '')
     });


  //}

  console.log(newReq);
  return next.handle(newReq)
   
  }
}
