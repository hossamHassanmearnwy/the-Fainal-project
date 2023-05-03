import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  ////////////////////////

  /////////////////////////////////////////////
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
      compatibleDevicesAr:string=""
      compatibleDevicesEn:string=""
      specialFeatureEn:string=""
      specialFeatureAr:string=""
      connectivityTechnologyEn:string=""
      connectivityTechnologyAr:string=""
      compatiblePhoneModelsEn:string=""
      compatiblePhoneModelsAr:string=""
      inputVoltage:string=""
      amperage:string=""
      totalUspPorts:string=""
      mountingType:string=""
      itemHardness:string=""
      finishTypeEn:string=""
      finishTypeAr:string=""
      unitCount:string=""
      screenSize:string=""
      itemWeight:string=""
      weightLimit:string=""
      maximumHeight:string=""
      tripodHeadType:string=""
      foldedSize:string=""
      brandMaterialTypeEn:string=""
      brandMaterialTypeAr:string=""
      Network:string=""
      processorEn:string=""
      processorAr:string=""
      numberOfBatteries:string=""
      batteryAverageLifeStandby:string=""
      areBatteriesIncluded:string=""
      areBatteriesRequired:string=""
      plugFormat:string=""
      outputVoltage:string=""
      totalPowerOutlets:string=""
      includedComponents:string=""

      


      




      images=[]	;
      price	: string=""
      onSale	: string=""
      priceOnSale 	: string=""
      Keyboard	: string=""
      memoryRam	: string=""
      internalStorage	: string=""
      operatingSystem	: string=""
      processor	: string=""
      battery	: string=""
      realCamera	: string=""
      graphicsDisplay: string=""
      //////////////////////////////
      selectedCategory:string=''




    constructor(private http: HttpClient, private sweetAlertService: SweetAlertService){

  
    }

    // selectImage(event){
    //   if(event.files.target>0){
    //     const file = event.target.files[0];
    //     this.images = file
    //   }

    // }
    selectImages(event:any){
      if (event.target.files.length > 0) {
      this.images = event.target.files;
    }
    }
    
 
 



      register(){
        const formData = new FormData();
        for(let img of this.images){
          formData.append('files',img)
        }
         this.http.post<any>('http://localhost:3001/upload', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );


        

        /////////////////////
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
         "CompatibleDevicesAr":this.compatibleDevicesAr,
         "CompatibleDevicesEn":this.compatibleDevicesEn,
         "SpecialFeatureEn":this.specialFeatureEn,
         "SpecialFeatureAr":this.specialFeatureAr,
         "connectivityTechnologyEn":this.connectivityTechnologyEn,
         "connectivityTechnologyAr":this.connectivityTechnologyAr,
         "compatiblePhoneModelsEn":this.compatiblePhoneModelsEn,
         "compatiblePhoneModelsAr":this.compatiblePhoneModelsAr,
         "inputVoltage":this.inputVoltage,
         "Amperage":this.amperage,
         "totalUspPorts":this.totalUspPorts,
         "mountingType":this.mountingType,
         "itemHardness":this.itemHardness,
         "finishTypeEn":this.finishTypeEn,
         "finishTypeAr":this.finishTypeAr,
         "unitCount":this.unitCount,
         "screenSize":this.screenSize,
         "itemWeight":this.itemWeight,
         "weightLimit":this.weightLimit,
         "maximumHeight":this.maximumHeight,
         "tripodHeadType":this.tripodHeadType,
         "foldedSize":this.foldedSize,
         "brandMaterialTypeEn":this.brandMaterialTypeEn,
         "brandMaterialTypeAr":this.brandMaterialTypeAr,
         "Network":this.Network,
         "numberOfBatteries":this.numberOfBatteries,
         "batteryAverageLifeStandby":this.batteryAverageLifeStandby,
         "areBatteriesIncluded":this.areBatteriesIncluded,
         "areBatteriesRequired":this.areBatteriesRequired,
         "plugFormat":this.plugFormat,
         "outputVoltage":this.outputVoltage,
         "totalPowerOutlets":this.totalPowerOutlets,
         "includedComponents":this.includedComponents,
         "Categorie.catNameEn":this.selectedCategory,


         "Images" : this.images,
         "Price" : this.price,
         "onSale" : this.onSale,
         "PriceOnSale" : this.priceOnSale,
         "Keyboard" : this.Keyboard,
         "memoryRam" : this.memoryRam,
         "internalStorage" : this.internalStorage,
         "operatingSystem" : this.operatingSystem,
         "ProcessorEn" : this.processorEn,
         "ProcessorAr" : this.processorAr,
         "Battery" : this.battery,
         "realCamera" : this.realCamera,
         "graphicsDisplay" : this.graphicsDisplay
        };

        this.http.post("http://localhost:3001/Products",bodyData).subscribe((resultData: any)=>{
          console.log(resultData)

          this.sweetAlertService.showSuccess('Product added Successfully');
          //alert("Product added Successfully")
      // this.itemName  = '',
      // this.brand  = '',
      // this.color = '',

        
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
      this.memoryRam	 = '',
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

