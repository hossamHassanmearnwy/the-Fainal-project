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
      icon: "fa-solid fa-chart-pie",
    },
    {
      number: '2',
      name: 'Products',
      icon: "fa-solid fa-mobile-screen-button",
    },
    {
      number: '3',
      name: 'Categories',
      icon: "fa-solid fa-box",
    },
    {
      number: '4',
      name: 'Users',
      icon: "fa-solid fa-users",
    },
    {
      number: '5',
      name: 'Orders',
      icon: "fa-solid fa-cart-shopping",
    }
  ]
ngOnInit(): void {
  
}

}
