import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { AddProductComponent } from './components/add-product/add-product.component';

import { AddOrderComponent } from './components/add-order/add-order.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { UserAuthheGuard } from './Guard/user-authh.guard';
import { UserAuthService } from './services/user-auth.service'


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    ProductsComponent,
    CategoriesComponent,
    OrdersComponent,
    UsersComponent,
    DashboardComponent,
    NotfoundComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,

    AddProductComponent,

    AddOrderComponent,
    UpdateOrderComponent,
    UserLoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        }
      }
    })
    
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    UserAuthheGuard,
    UserAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
