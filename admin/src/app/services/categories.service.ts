import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICategory } from '../models/icategory';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

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
  return this.httpClient.get<ICategory[]>(`http://localhost:3000/categories`);
}


getCatByID(cid:number):Observable<ICategory>{
  return this.httpClient.get<ICategory>(`http://localhost:3000/categories/${cid}`);
  }

  addNewCat(category:ICategory):Observable<ICategory>{
    return this.httpClient.post<ICategory>(`http://localhost:3000/categories`,JSON.stringify(category),this.httpOptions)
  }

  deleteCat(cid:number):Observable<ICategory>{
    return this.httpClient.delete<ICategory>(`http://localhost:3000/categories/${cid}`,this.httpOptions)
  }

  getUpdateCat(cid:number):Observable<ICategory>{
    return this.httpClient.get<ICategory>(`http://localhost:3000/categories/${cid}`,this.httpOptions)
  }

  updateCat(category:ICategory):Observable<ICategory>{
    return this.httpClient.put<ICategory>(`http://localhost:3000/categories/${category.id}`, category,this.httpOptions).pipe(
      map(()=>category)
    )
  }

}





  


