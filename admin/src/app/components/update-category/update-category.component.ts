import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/icategory';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit{
  val: any;
  categories: ICategory[] = [];
  cat!: ICategory;
  constructor(private catAPI : CategoriesService, private router:Router, public route:ActivatedRoute, ){

  }
  ngOnInit(): void {
    // this.catAPI.getAllCat().subscribe(response =>{
    //   this.categories = (response as any).data;

    //   console.log(response);
    //})
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    });
    console.log("id: " + this.val);

    this.catAPI.getUpdateCat(this.val).subscribe( res => {
      this.cat = (res as any).data;
    });
  }

  update(){
    this.catAPI.updateCat(this.cat).subscribe(data => {
    });
    this.getUsers();
    this.router.navigate(['/category'])
  }

  getUsers(){
    this.catAPI.getAllCat().subscribe((response)=>{
      this.categories = (response as any).data;
    })
  }

}





