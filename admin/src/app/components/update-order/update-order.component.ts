import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrder } from 'src/app/models/iorder';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.scss']
})
export class UpdateOrderComponent implements OnInit{
  val: any;
  orders: IOrder[] = [];
  order!: IOrder;
  constructor(private orderAPI : OrderServiceService, private router:Router, public route:ActivatedRoute, ){

  }
  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    });
    console.log("id: " + this.val);

    this.orderAPI.getUpdateOrder(this.val).subscribe( data => {
      this.order = data;
    });
  }

  update(){
    this.orderAPI.updateOrder(this.order).subscribe(data => {
    });
    this.getUsers();
    this.router.navigate(['/order'])
  }

  getUsers(){
    this.orderAPI.getAllOrders().subscribe((response)=>{
      this.orders = response;
    })
  }

}
