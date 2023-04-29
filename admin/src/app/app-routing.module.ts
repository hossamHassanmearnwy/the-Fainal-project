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
<<<<<<< HEAD
import { AddProductComponent } from './components/add-product/add-product.component';
=======
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserAuthheGuard } from './Guard/user-authh.guard';
>>>>>>> de3b129795692037319e963993db31b17499d51d

const routes: Routes = [

  {path:'', redirectTo: '/dashboard',pathMatch:'full'},
<<<<<<< HEAD
  {path:'dashboard',component:DashboardComponent},
  {path:'product',component:ProductsComponent},
  {path:'order',component:OrdersComponent},
  {path:'user',component:UsersComponent},
  {path:'category',component:CategoriesComponent},
  {path:'addCat',component:AddCategoryComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'updateCat/:id',component:UpdateCategoryComponent},

=======
  {path:'dashboard',component:DashboardComponent, canActivate:[UserAuthheGuard] },
  {path:'product',component:ProductsComponent, canActivate:[UserAuthheGuard] },
  {path:'order',component:OrdersComponent, canActivate:[UserAuthheGuard],},
  {path:'user',component:UsersComponent, canActivate:[UserAuthheGuard] },
  {path:'category',component:CategoriesComponent, canActivate:[UserAuthheGuard] },
  {path:'addCat',component:AddCategoryComponent, canActivate:[UserAuthheGuard] },
  {path:'updateCat/:id',component:UpdateCategoryComponent, canActivate:[UserAuthheGuard] },
  {path:'addOrder',component:AddOrderComponent, canActivate:[UserAuthheGuard] },
  {path:'updateOrder/:id',component:UpdateOrderComponent, canActivate:[UserAuthheGuard] },
>>>>>>> de3b129795692037319e963993db31b17499d51d

  {path:'Login',component:UserLoginComponent,title:'Login page'},
  {path:'Logout',component:UserLoginComponent,title:'Logout page'},
  {path:'**',component:NotfoundComponent}//wildcard

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
