import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
      itemNameEn	: string=""
      itemNameAr	: string=""
      brandEn : string=""
      brandAr : string=""
      colorEn : string=""
      colorAr: string=""
      detailsEn: string=""
      detailsAr:string=""
      descriptionEn: string=""
      descriptionAr: string=""
      capacity:string=""
      interface:string=""
      connector:string=""
      compatibilityAr:string=""
      compatibilityEn:string=""
      workWithAr:string=""
      workWithEn:string=""
      laptopCompartmentAr:string=""
      laptopCompartmentEn:string=""
      materialAr:string=""
      materialEn:string=""
      powerSourceAr:string=""
      powerSourceEn:string=""
      seriesAr:string=""
      seriesEn:string=""
      weight:string=""
      dimensions:string=""
      wattage:string=""
      outputWattage:string=""
      connectorAr:string=""
      connectorEn:string=""
      typeAr:string=""
      typeEn:string=""
      


      




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
      //////////////////////////////
      selectedCategory:string=''




    constructor(private http: HttpClient){

  
    }

      register(){
        let bodyData = {
         "ItemNameEn" : this.itemNameEn,
         "ItemNameAr" : this.itemNameAr,
         "BrandAr" : this.brandAr,
         "BrandEn" : this.brandEn,
         "ColorEn" : this.colorEn,
         "ColorAr" : this.colorAr,
         "DetailsEn" : this.detailsEn,
         "DetailsAr" : this.detailsAr,
         "DescriptionAr" : this.descriptionAr,
         "DescriptionEn" : this.descriptionEn,
         "Capacity" : this.capacity,
         "Interface" :this.interface,
         "Connector" : this.connector,
         "CompatibilityAr": this.compatibilityAr,
         "CompatibilityEn": this.compatibilityEn,
         "workWithEn":this.workWithEn,
         "workWithAr":this.workWithAr,
         "laptopCompartmentAr":this.laptopCompartmentAr,
         "laptopCompartmentEn":this.laptopCompartmentEn,
         "MaterialAr":this.materialAr,
         "MaterialEn":this.materialEn,
         "powerSourceAr":this.powerSourceAr,
         "powerSourceEn":this.powerSourceEn,
         "SeriesAr":this.seriesAr,
         "SeriesEn":this.seriesEn,
         "Weight":this.weight,
         "Dimensions":this.dimensions,
         "Wattage":this.wattage,
         "outputWattage":this.outputWattage,
         "ConnectorAr":this.connectorAr,
         "ConnectorEn":this.connectorAr,
         "TypeEn":this.typeEn,
         "TypeAr":this.typeAr,


         "Images" : this.images,
         "Price" : this.price,
         "onSale" : this.onSale,
         "PriceOnSale" : this.priceOnSale,
         "Keyboard" : this.Keyboard,
         "memoryRAM" : this.memoryRAM,
         "internalStorage" : this.internalStorage,
         "operatingSystem" : this.operatingSystem,
         "Processor" : this.processor,
         "Battery" : this.battery,
         "realCamera" : this.realCamera,
         "graphicsDisplay" : this.graphicsDisplay
        };

        this.http.post("http://localhost:3001/Products",bodyData).subscribe((resultData: any)=>{
          console.log(resultData)
          alert("Product added Successfully")
      this.itemNameEn  = '',
      this.itemNameAr  = '',
      this.brandEn  = '',
      this.brandAr  = '',
      this.colorAr = '',
      this.colorEn = '',
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
      this.descriptionEn = '',
      this.descriptionAr = '',
      this.compatibilityAr='',
      this.compatibilityEn='',
      this.workWithAr='',
      this.workWithEn='',
      this.laptopCompartmentAr='',
      this.laptopCompartmentEn=''



        })
        
      }

}
