import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/icategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  cat:ICategory= {} as ICategory;
  ListOfCat:ICategory[]=[];
  constructor(private catAPI : CategoriesService, private router:Router){

  }
  ngOnInit(): void {
    this.catAPI.getAllCat().subscribe(response =>{
      this.ListOfCat = (response as any).data;
      console.log(response);
      
  })
  }

  addCat(){
  
  
  
    this.catAPI.addNewCat(this.cat).subscribe({
      next:(newCat)=>{
        console.log(newCat);
        alert("category added successfully")
        this.router.navigate(['/category']);
  
      },
      error:(err)=>{
        console.log(err);
  
      }
    })
    }

}







