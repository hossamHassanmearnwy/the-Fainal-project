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


  this.orderAPI.getUpdateOrder(this.val).subscribe( data => {
    this.order = data;
    console.log(this.order);
    
  });


}







  // delete(val: number){
  //   var delBtn = confirm(" Do you want to delete ?");
  //   if ( delBtn == true ) {
  //     this.orderAPI.deleteOrder(val).subscribe((data) => {
  //     });
  //     this.orderAPI.getAllOrders().subscribe((response) => {
  //       this.ListOfOrder = response
  //     });
  //   }
  // }

  // update(id:number){
  //   this.router.navigate(['/updateOrder',id])
  //   }



   Search() {
    this.ListOfOrder = this.ListOfOrder.filter(row => {
      return Object.values(row).some(val =>
        val.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
   }
 key: string ='id';
 reverse: boolean = false;
 sort(key: string){
  this.key = key;
  this.reverse = !this.reverse;
 }

}
