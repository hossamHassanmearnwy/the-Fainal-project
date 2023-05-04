import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/models/iorder';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ListOfOrder:IOrder[]=[];
  searchTerm: string = '';
  p: number =1;
  order:IOrder= {} as IOrder;
  constructor(private orderAPI: OrderServiceService, private router:Router, private sweetAlertService: SweetAlertService){

  }


  ngOnInit(): void {
  this.orderAPI.getAllOrders().subscribe(response =>{
    this.ListOfOrder=response
    console.log(this.ListOfOrder);
    
  })
  // this.orderAPI.getOrderByID(3).subscribe(data =>{
  // console.log(data)
 // })
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




  delete(val: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Order!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderAPI.deleteOrder(val).subscribe((data) => {
          this.sweetAlertService.showSuccess('order Deleted Successfully');

          this.ListOfOrder = this.ListOfOrder.filter((order) => order._id !== val);
        });
        
      }
    });
  }





  update(id:number){
    this.router.navigate(['/updateOrder',id])
    }

    details(id:number){
      this.router.navigate(['/orderDetail',id])
      }

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
