import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/icategory';
import { CategoriesService } from 'src/app/services/categories.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  ListOfCat:ICategory[]=[];
  searchTerm: string = '';
  p: number =1;
  cat:ICategory= {} as ICategory;
  constructor(private catAPI: CategoriesService, private router:Router, private sweetAlertService: SweetAlertService){


  }


  ngOnInit(): void {
    this.catAPI.getAllCat().subscribe(response =>{
      this.ListOfCat = (response as any).data;
      console.log(response);
      
    })

  // this.catAPI.getCatByID(3).subscribe(data =>{
  // console.log(data)
  //})
  }

//   delete(val: string){
//     //var delBtn = this.sweetAlertService.showError('You need to log in to access this page.') ;
//     //var delBtn = confirm(`You need to log in to access this page.`);
// this.sweetAlertService.showError(delBtn ? 'Confirmed' : 'Cancelled');
//     if ( delBtn == Confirmed ) {
//       this.catAPI.deleteCat(val).subscribe((data) => {
//       });
//       this.catAPI.getAllCat().subscribe((response) => {
//         this.ListOfCat = response
//       });
//     }
//   }






delete(val: any) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this category!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      this.catAPI.deleteCat(val).subscribe((data: any) => {
        console.log(data);
        this.sweetAlertService.showSuccess('category Deleted Successfully');

        // Remove the deleted category from the list of categories
        this.ListOfCat = this.ListOfCat.filter((cat) => cat._id !== val);

      }); 
    }
  });
}






  update(id:string){
    this.router.navigate(['/updateCat',id])
    }

    // update(id:number){
    //   this.router.navigate(['/updateOrder',id])
    //   }

   Search() {
    this.ListOfCat = this.ListOfCat.filter(row => {
      return Object.values(row).some(val =>
        val.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
   }
 key: string ='id';
 reverse: boolean = false;
 sort(key: string){
  this.key = key;
  this.reverse = !this.reverse;
 }


}
