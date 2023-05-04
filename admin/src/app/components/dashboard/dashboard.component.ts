import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { IOrder } from 'src/app/models/iorder';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  usersArray : any[] = [];
  ListOfOrder:IOrder[]=[];
  allProductsArray: any[]=[]
  searchTerm: string = '';
  p: number =1;
  order:IOrder= {} as IOrder;
  usersCount!: number;
  prodCount!: number;
  orderCount!: number;
  constructor(private http: HttpClient, private orderAPI: OrderServiceService, private router:Router){

    this.getCountUsers();
    this.getAllProducts();
    this.getAllUsers();
    //this.getCountOrder();

  }
  ngOnInit() {
    // this.orderAPI.getOrderCount().subscribe(
    //   (data: any) => {
    //     this.orderCount = data.count;
    //   },
    //   (error: any) => {
    //     console.error(error);
    //   }
    // );
    


    this.orderAPI.getAllOrders().subscribe(response =>{
      this.ListOfOrder=response
      console.log(this.ListOfOrder);
  })
}


getAllUsers(){
  this.http.get("http://localhost:3001/users").subscribe((resultData: any)=>{
    console.log(resultData)
    this.usersArray = resultData

  })
  
}

    getCountUsers(){
      this.http.get("http://localhost:3001/users/count").subscribe((data: any)=>{
          this.usersCount = data.count;
          console.log(this.usersCount);
          
        },
        (error: any) => {
          console.error(error);
        }
      );
  
  }




getAllProducts(){
  this.http.get("http://localhost:3001/Products").subscribe((resultData: any)=>{
    console.log(resultData)
    this.allProductsArray = resultData

  })
}






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
      });
      this.orderAPI.getAllOrders().subscribe((response) => {
        this.ListOfOrder = response
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

 
key: string ='id';
reverse: boolean = false;
sort(key: string){
this.key = key;
this.reverse = !this.reverse;

}


  }

 






  


 
