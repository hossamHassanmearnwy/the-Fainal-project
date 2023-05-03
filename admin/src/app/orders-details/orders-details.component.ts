import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderServiceService } from '../services/order-service.service';
import { IOrder } from '../models/iorder';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit {
  ListOfOrder:IOrder[]=[];
  val: any;
  data:any;
  searchTerm: string = '';
  p: number =1;
  order:IOrder= {} as IOrder;
  constructor(private orderAPI: OrderServiceService, private router:Router, private route: ActivatedRoute){

  }


  ngOnInit(): void {

  let sub = this.route.params.subscribe(params => {
    this.val = params['id'];
  });
  console.log("id: " + this.val);


  this.orderAPI.getUpdateOrder(this.val).subscribe( order => {
    this.order = order;
    console.log(order);
    
  });


}



 key: string ='id';
 reverse: boolean = false;
 sort(key: string){
  this.key = key;
  this.reverse = !this.reverse;
 }

}
