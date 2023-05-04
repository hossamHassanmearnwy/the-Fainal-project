import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ICategory } from '../models/icategory';
import { catchError, map, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  //baseUri: string = 'http://localhost:3001/Categories';
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
  return this.httpClient.get<ICategory[]>(`http://localhost:3001/Categories`)
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
    return this.httpClient.patch<ICategory>(`http://localhost:3001/Categories/${category._id}`, category,this.httpOptions).pipe(
      map(()=>category)
    )
  }



  
    // Error handling
    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(() => {
        return errorMessage;
      });
    }







}





  


