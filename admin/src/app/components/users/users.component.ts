import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { OrderServiceService } from 'src/app/services/order-service.service';
=======
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
>>>>>>> dccf3a23488df3619e12f92eb47300afc214fed0




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  usersArray : any[] = [];
  isResultLoaded = false;
  searchData: any;
  tableSize:number = 10;
  tableSizes:any = [5, 10, 15, 20, 25];
  count:number=0;
  page: number = 1
<<<<<<< HEAD
  constructor(private http: HttpClient, private orderService:OrderServiceService){
=======
  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService){
>>>>>>> dccf3a23488df3619e12f92eb47300afc214fed0
    this.getAllUsers();

  }
  

  getAllUsers(){
    this.http.get("http://localhost:3001/users").subscribe((resultData: any)=>{
      console.log(resultData)
      this.usersArray = resultData

    })
    
  }

  deleteUser(data : any){
    // throw new Error ("Method not implemented")
    console.log(data)
    this.http.delete("http://localhost:3001/users"+"/"+ data._id).subscribe((resultData: any)=>{
      console.log(resultData);
      this.sweetAlertService.showError('User Deleted Successfully');
      //alert("User Deleted Successfully")
      this.getAllUsers()
    })
  }

  search(){
    if(this.searchData ==""){
      this.getAllUsers()
    }else{
      this.usersArray = this.usersArray.filter(res =>{
        return res.email.toLocaleLowerCase().match(this.searchData.toLocaleLowerCase())
        
      })
    }


  }


onTableDataChange(event:any){
  this.page = event;
  this.getAllUsers()
}

onTableSizeChange(event:any): void{
  this.tableSize = event.target.value;
  this.page= 1;
  this.getAllUsers()
}


}
