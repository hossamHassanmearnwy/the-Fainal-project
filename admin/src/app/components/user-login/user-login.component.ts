import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{
  user:boolean=false;
 
  constructor( private userService:UserAuthService, private router: Router,private sweetAlertService: SweetAlertService){}


  
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });



  ngOnInit(): void {
    this.user=this.userService.UserState;

  }
  // onSubmit() {
    
  // }

  userLogin(){
    // this.userService.login('marina@gmail.com','1234');
    // this.user=this.userService.UserState && this.userService.isAdmin && this.userService.isLoggedIn;//true 
    
    if (this.loginForm.valid) {
      
      
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      console.log("inprogress");
      this.userService.login(email, password)
        .subscribe((response) => {
          console.log(response);
          //if (response==true && response.isAdmin)
          if (response)
           {
            this.router.navigate(['/dashboard']);
            console.log('Login successfully');
           // this.router.navigate(['/dashboard']);
          }
        },(error: HttpErrorResponse) => {
          this.sweetAlertService.showError('Invalid Mail or Password');
        })
  }




  
  }
}
