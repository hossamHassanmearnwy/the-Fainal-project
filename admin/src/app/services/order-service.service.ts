import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import { map, Observable, throwError,  } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IOrder } from '../models/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  baseUri: string = 'http://localhost:3001/orders';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private httpOptions={};

  constructor(private httpClient: HttpClient) {   
this.httpOptions={
  // headers:new HttpHeaders(
  //   {
  //     'Content-Type':'application/json'
  //   }
  // )
};

}

getAllOrders():Observable<IOrder[]>{
  // return this.httpClient.get<IOrder[]>(`${this.baseUri}`);
  return this.httpClient.get<IOrder[]>(`http://localhost:3000/orders`);


}


getOrderByID(oid:number):Observable<IOrder>{
  return this.httpClient.get<IOrder>(`http://localhost:3000/orders/${oid}`);
  }

  addNewOrder(order:IOrder):Observable<IOrder>{
    return this.httpClient.post<IOrder>(`http://localhost:3000/orders`,JSON.stringify(order),this.httpOptions)

  }

  deleteOrder(oid:number):Observable<IOrder>{
    return this.httpClient.delete<IOrder>(`http://localhost:3000/orders/${oid}`,this.httpOptions)
  }

  getUpdateOrder(oid:number):Observable<IOrder>{
    return this.httpClient.get<IOrder>(`http://localhost:3000/orders/${oid}`,this.httpOptions)
  }

  updateOrder(order:IOrder):Observable<IOrder>{
    return this.httpClient.put<IOrder>(`http://localhost:3000/orders/${order.id}`, order,this.httpOptions).pipe(
      map(()=>order)
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










  


