import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { AddOrderComponent } from './components/add-order/add-order.component';

const routes: Routes = [

  {path:'', redirectTo: '/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'product',component:ProductsComponent},
  {path:'order',component:OrdersComponent},
  {path:'user',component:UsersComponent},
  {path:'category',component:CategoriesComponent},
  {path:'addCat',component:AddCategoryComponent},
  {path:'updateCat/:id',component:UpdateCategoryComponent},
  {path:'addOrder',component:AddOrderComponent},
  {path:'updateOrder/:id',component:UpdateOrderComponent},


  {path:'**',component:NotfoundComponent}//wildcard

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
