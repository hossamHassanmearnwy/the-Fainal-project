import { Injectable } from '@angular/core';
import { IProduct } from './../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    productList:IProduct[];

  constructor() { 
    this.productList=[
      {
        id:1,
        name:"Iphone12",
        quantity:2,
        price:20000,
        img:"https://img.ep-cdn.com/i/500/500/lv/lvkjbqfyianrdowpmgxh/apple-iphone-12-128gb-blue-mgje3se-a-mobilni-telefon-cene.jpg",
    categoryId:1,
    colors:["Red","Blue","Black","White"]
  },
  
    {
    id:21,
    name:"Iphone13",
    quantity:3,
    price:22000,
    img:"https://media-cdn.bnn.in.th/140328/iPhone_13_PDP_Position-1A_Color_Pink__3-square_medium.jpg",
    categoryId:1,
    colors:["Red","Blue","Black","White"]
  },
  
    {
    id:34,
    name:"Samsung",
    quantity:0,
    price:18000,
    img:"https://i.pinimg.com/564x/c4/39/9c/c4399c3f7dd75a54eae3049ea3b062c9.jpg",
    categoryId:1,
    colors:["Red","Blue","Black","White"]
  },
  
    {
      id:24,
    name:"HP",
    quantity:2,
    price:35000,
    img:"https://i.pinimg.com/564x/49/a5/23/49a52381639c73ca79afe01a2593aff1.jpg",
    categoryId:2,
    colors:["Red","Blue","Black","White"]
  },
  
  {
    id:54,
    name:"Mac Book",
    quantity:0,
    price:25000,
    img:"https://i.pinimg.com/564x/bc/fd/58/bcfd5887a0ea1c0cbb4e338498fb8ac0.jpg",
    categoryId:2,
    colors:["Red","Blue","Black","White"]
  },
  
    {
      id:23,
      name:"Dell",
      quantity:7,
      price:30000,
      img:"https://i.pinimg.com/564x/64/59/a5/6459a5862ae610b03ee680722894fdd8.jpg",
      categoryId:2,
      colors:["Red","Blue","Black","White"]
    },
    
    {
    id:82,
    name:"ASUS",
    quantity:1,
    price:45000,
    img:"https://i.pinimg.com/564x/8c/be/56/8cbe567e3ed7e1d9e0e7deaac0614596.jpg",
    categoryId:2,
    colors:["Red","Blue","Black","White"]
  },
  
    {
      id:6,
    name:"LG",
    quantity:0,
    price:50000,
    img:"https://i.pinimg.com/564x/a2/5e/23/a25e23008ef3763a00e6f759dcbdcff6.jpg",
    categoryId:3,
    colors:["Red","Blue","Black","White"]
  },
  
    {
      id:56,
      name:"SONY",
    quantity:5,
    price:55000,
    img:"https://i.pinimg.com/564x/10/0c/c1/100cc1b076931f115746c9240836ce28.jpg",
    categoryId:3,
    colors:["Red","Blue","Black","White"]
  },
  
  {
    id:66,
    name:"SamsungTV",
    quantity:1,
    price:67000,
    img:"https://i.pinimg.com/564x/62/ff/d6/62ffd69a2c0c2dcf46ce80528985f0c5.jpg",
    categoryId:3,
    colors:["Red","Blue","Black","White"]
  }
  



  ]


  }
  



  
getAllProducts():IProduct[]{
  return this.productList;

}

  getProductByCategoryId(catId:number):IProduct[]{
  
  if(catId==0){
      return this.getAllProducts()
    }else{
      return this.productList.filter(pro=>pro.categoryId==catId)
      
    }
  }


  addNewProduct(prd: IProduct) {
    this.productList.push(prd);
  }
  
// get products ids
  getPrdIDs(): number[] {
    let prdIDs = this.productList.map((pro) => pro.id);
    return prdIDs;
  }


}
