import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit{

@Input() sideNavStatus: boolean = false;

  list =[
    {
      number: '1',
      name: 'Dashboard',
      link:'/dashboard',
      icon: "fa-solid fa-chart-pie",
    },
    {
      number: '2',
      name: 'Products',
      link:'/product',
      icon: "fa-solid fa-mobile-screen-button",
    },
    {
      number: '3',
      name: 'Categories',
      link:'/category',
      icon: "fa-solid fa-box",
    },
    {
      number: '4',
      name: 'Users',
      link:'/user',
      icon: "fa-solid fa-users",
    },
    {
      number: '5',
      name: 'Orders',
      link:'/order',
      icon: "fa-solid fa-cart-shopping",
    }
  ]
ngOnInit(): void {
  
}

}
