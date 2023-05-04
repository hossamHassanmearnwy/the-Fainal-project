import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
////////////////////////////////////
      // itemName	: string=""
      // brand : string=""
      // color: string=""
      // images:[]=[]	
      // price	: string=""
      // onSale	: string=""
      // priceOnSale 	: string=""
      // Keyboard	: string=""
      // memoryRAM	: string=""
      // internalStorage	: string=""
      // operatingSystem	: string=""
      // Processor	: string=""
      // Battery	: string=""
      // realCamera	: string=""
      // graphicsDisplay: string=""
      ///////////////////////////////////////////////////
  allProductsArray: any[]=[]
    searchTerm: string = '';
    ///////////
    searchData: any;
  tableSize:number = 10;
  tableSizes:any = [5, 10, 15, 20, 25];
  count:number=0;
  page: number = 1
  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService ){
      this.getAllProducts()
  

  }

  getAllProducts(){
    this.http.get("http://localhost:3001/Products").subscribe((resultData: any)=>{
      console.log(resultData)
      this.allProductsArray = resultData

    })
  }
  // deleteProduct(data :any){
  //   console.log(data)
  //   this.http.delete("http://localhost:3001/products"+"/"+ data._id).subscribe((resultData: any)=>{
  //     console.log(resultData);
  //     this.sweetAlertService.showSuccess('Product Deleted Successfully');
  //     //alert("Product Deleted Successfully")
  //     // this.getAllProducts()
  //   })
  // }




  deleteProduct(data :any){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this category!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete("http://localhost:3001/products"+"/"+ data._id).subscribe((resultData: any)=>{
          console.log(resultData);
          this.sweetAlertService.showSuccess('Product Deleted Successfully');
          //alert("Product Deleted Successfully")
          // this.getAllProducts()
        })
      }
    });
  }




  search(){
    if(this.searchData ==""){
      this.getAllProducts()
    }else{
      this.allProductsArray = this.allProductsArray.filter(res =>{
        return res.ItemNameEn.toLocaleLowerCase().match(this.searchData.toLocaleLowerCase())
        
      })
    }
//  gettAllByCat() {
//  this.allProductsArray.find({Categorie : id })
//     .populate('categories', 'name');
// }

//  gettAllByCat(id) {
//   this.allProductsArray.find({ Categorie: { _id: id } }) .populate('Categorie', 'catNameEn');
//   
// }

  }


onTableDataChange(event:any){
  this.page = event;
  this.getAllProducts()
}

onTableSizeChange(event:any): void{
  this.tableSize = event.target.value;
  this.page= 1;
  this.getAllProducts()
}
}
function gettAllByCat() {
  throw new Error('Function not implemented.');
}

