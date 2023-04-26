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
  constructor(private catAPI : CategoriesService, private router:Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  addCat(){
  
  
  
    this.catAPI.addNewCat(this.cat).subscribe({
      next:(newCat)=>{
        console.log(newCat);
        this.router.navigate(['/category']);
  
      },
      error:(err)=>{
        console.log(err);
  
      }
    })
    }

}







