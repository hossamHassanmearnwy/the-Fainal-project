import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IOrder } from '../models/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
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

getAllOrders():Observable<IOrder[]>{
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

}










  


