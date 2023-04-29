import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ICategory } from '../models/icategory';
import { catchError, map, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUri: string = 'http://localhost:3001/Categories';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private httpOptions={};

  constructor(private httpClient: HttpClient) {
this.httpOptions={
  headers:new HttpHeaders(
    {
      'Content-Type':'application/json'
    }
  )
};

}

getAllCat():Observable<ICategory[]>{
  // return this.httpClient.get<ICategory[]>(`http://localhost:3000/categories`);
  return this.httpClient.get<ICategory[]>(`http://localhost:3001/Categories`).pipe(
    catchError(this.handleError)
  );;
}


// getCatByID(cid:number):Observable<ICategory>{
//   return this.httpClient.get<ICategory>(`http://localhost:3001/Categories/${cid}`);
//   }

  addNewCat(category:ICategory):Observable<ICategory>{
    return this.httpClient.post<ICategory>(`http://localhost:3001/Categories`,JSON.stringify(category),this.httpOptions)
  }

  deleteCat(cid:string):Observable<ICategory>{
    return this.httpClient.delete<ICategory>(`http://localhost:3001/Categories/${cid}`,this.httpOptions)
  }

  getUpdateCat(cid:string):Observable<ICategory>{
    return this.httpClient.get<ICategory>(`http://localhost:3001/Categories/${cid}`,this.httpOptions)
  }

  updateCat(category:ICategory):Observable<ICategory>{
    return this.httpClient.put<ICategory>(`http://localhost:3001/Categories/${category._id}`, category,this.httpOptions).pipe(
      map(()=>category)
    )
  }



  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }


    return throwError(
      'Something bad happened; please try again later.');
  };

    // // Error handling
    // errorMgmt(error: HttpErrorResponse) {
    //   let errorMessage = '';
    //   if (error.error instanceof ErrorEvent) {
    //     // Get client-side error
    //     errorMessage = error.error.message;
    //   } else {
    //     // Get server-side error
    //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //   }
    //   console.log(errorMessage);
    //   return throwError(() => {
    //     return errorMessage;
    //   });
    //}







}





  


