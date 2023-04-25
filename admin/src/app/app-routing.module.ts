import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [

  {path:'', redirectTo: '/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'product',component:ProductsComponent},
  {path:'order',component:OrdersComponent},
  {path:'user',component:UsersComponent},
  {path:'category',component:CategoriesComponent},


  {path:'**',component:NotfoundComponent}//wildcard

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
