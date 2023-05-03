import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() sideNavToggled = new EventEmitter<boolean>()
  menuStatus: boolean = false;
  user:boolean=false;
  // userLogged!:boolean;
  constructor(private userService:UserAuthService){}
  ngOnInit(): void {
  }
  SideNavToggled(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus)
  }

  userLogout(){
    this.userService.logout();
    this.user = this.userService.UserState;//false
  }


  isLoggedIn(): boolean {
    const token = localStorage.getItem('currentUser');
    
    if(token){
      return true;
    }
    else{
      return false;
    }
  }

}
