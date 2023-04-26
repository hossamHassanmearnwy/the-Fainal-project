import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/icategory';
import { CategoriesService } from 'src/app/services/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  ListOfCat:ICategory[]=[];
  searchTerm: string = ''
  cat:ICategory= {} as ICategory;
  constructor(private catAPI: CategoriesService, private router:Router){

  }


  ngOnInit(): void {
  this.catAPI.getAllCat().subscribe(data =>{
    this.ListOfCat=data;
  })
  this.catAPI.getCatByID(3).subscribe(data =>{
  console.log(data)
  })
  }

  delete(val: number){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.catAPI.deleteCat(val).subscribe((data) => {
      });
      this.catAPI.getAllCat().subscribe((response) => {
        this.ListOfCat = response
      });
    }
  }

  update(id:number){
    this.router.navigate(['/updateCat',id])
    }



   Search() {
    this.ListOfCat = this.ListOfCat.filter(row => {
      return Object.values(row).some(val =>
        val.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
   }



}
