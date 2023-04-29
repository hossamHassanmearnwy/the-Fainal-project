import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/models/iorder';
import { OrderServiceService } from 'src/app/services/order-service.service';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent {
  order:IOrder= {} as IOrder;
  constructor(private orderAPI : OrderServiceService, private router:Router,){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  addOrder(){
  
  
  
    this.orderAPI.addNewOrder(this.order).subscribe({
      next:(newOrder)=>{
        console.log(newOrder);
        this.router.navigate(['/order']);
  
      },
      error:(err)=>{
        console.log(err);
  
      }
    })
    }

}
