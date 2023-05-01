import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
      itemName	: string=""
      brand : string=""
      color: string=""
      images:[]=[]	
      price	: string=""
      onSale	: string=""
      priceOnSale 	: string=""
      Keyboard	: string=""
      memoryRAM	: string=""
      internalStorage	: string=""
      operatingSystem	: string=""
      processor	: string=""
      battery	: string=""
      realCamera	: string=""
      graphicsDisplay: string=""
      description: string=""



    constructor(private http: HttpClient){

    }


      register(){
        let bodyData = {
         "ItemNameEn" : this.itemName,
         "ItemNameAr" : this.itemName,
         "BrandAr" : this.brand,
         "BrandEn" : this.brand,
         "ColorEn" : this.color,
         "ColorAr" : this.color,
         "Images" : this.images,
         "Price" : this.price,
         "onSale" : this.onSale,
         "priceOnSale" : this.priceOnSale,
         "Keyboard" : this.Keyboard,
         "memoryRAM" : this.memoryRAM,
         "internalStorage" : this.internalStorage,
         "operatingSystem" : this.operatingSystem,
         "Processor" : this.processor,
         "Battery" : this.battery,
         "realCamera" : this.realCamera,
         "graphicsDisplay" : this.graphicsDisplay,
         "DescriptionAr" : this.description,
         "DescriptionEn" : this.description
        };

        this.http.post("http://localhost:3001/Products",bodyData).subscribe((resultData: any)=>{
          console.log(resultData)
          alert("Product added Successfully")
      this.itemName  = '',
      this.brand  = '',
      this.color = '',
      this.images = [],
      this.price	 = '',
      this.onSale	 = '',
      this.priceOnSale 	 = '',
      this.Keyboard	 = '',
      this.memoryRAM	 = '',
      this.internalStorage	 = '',
      this.operatingSystem	 = '',
      this.processor	 = '',
      this.battery	 = '',
      this.realCamera = '',
      this.graphicsDisplay = '',
      this.description = ''



        })
      }


}
