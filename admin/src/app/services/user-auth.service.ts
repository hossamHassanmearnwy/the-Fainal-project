import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isUserLoggedSubject:BehaviorSubject<boolean>;
  private isLoggedInValue = false;
  private isAdminValue = false;
  // private apiUrl = 'http://localhost:3001/login'; 

  constructor(private http: HttpClient) {
    this.isUserLoggedSubject=new BehaviorSubject<boolean>(this.UserState)
  }


  // login  logout
  //login(email:string, password:string): Observable<any>{
    // let userToken='654321';
    // localStorage.setItem("token",userToken);
    // this.isUserLoggedSubject.next(true);

    // const body = { email, password };
    // return this.http.post<any>(this.apiUrl, body);

//     return this.http.post<any>('http://localhost:3001/users/login', { email, password }).pipe(
//       map(response => {
// console.log(response);

//         if (response) {
//           this.isLoggedInValue = true;
//             console.log(this.isLoggedInValue);
//             console.log(this.isAdminValue);
//           this.isAdminValue = true;
//           console.log(this.isAdminValue);
//               let userToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDRhZjBiNTRlMWZhMzBlN2ZkM2Y4ZWEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2ODI2MzI5MjAsImV4cCI6MTY4MjYzNjUyMH0.7SaMQZMseCZOFZe7qbBKVoNO5gMmQwspt1UBgz2EKmc';
//               localStorage.setItem("token",userToken);
//               this.isUserLoggedSubject.next(true);
//         } else {
//           this.isLoggedInValue = false;
//           this.isAdminValue = false;
//           this.isUserLoggedSubject.next(false);
//         }
//       })
//     );

 // }


   
  







login(email: string, password: string): Observable<boolean> {
  return this.http.post<any>('http://localhost:3001/users/admin/login', { email, password }).pipe(
    map(response => {
      if (response && response.accessToken) {
        localStorage.setItem('currentUser', JSON.stringify({ token: response.accessToken }));
        this.isUserLoggedSubject.next(true);
        console.log(this.isUserLoggedSubject);
        
        return true;
      }
      return false;
    })
  );
}

logout() {
  localStorage.removeItem('currentUser');
  this.isUserLoggedSubject.next(false);
}

isAdmin(): boolean {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
  if (currentUser && currentUser.token) {
    const tokenPayload = JSON.parse(atob(currentUser.token.split('.')[1]));
    return tokenPayload.isAdmin;
  }
  return false;
}



getUserStatus():Observable<boolean>{
  return this.isUserLoggedSubject.asObservable();
}




get UserState():boolean{

  return (localStorage.getItem('token'))?true:false;
}



}

