import { Component } from '@angular/core';
import { UserService } from './user/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from './shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRM';

  isLoggedIn = false;

  constructor(private userService: UserService, private cookieService: CookieService, private sharedService: SharedService, private router: Router){
    this.checkLogin()
  }

  ngOnInit(){
   
  }

  
  

  
  // currentRouter = () => {
  //   if(((this.router.url) === '/') || ((this.router.url) === '/login')){
  //     return false;
  //   }
  //   else{
  //     return true;
  //   }
  // }

  checkLogin(){
    this.sharedService.userId$.subscribe((id) => {
      // console.log("gg",id);
      
      if(id && id !=0){
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;
      }
    })
    // if(this.cookieService.check('userData')){
    //   this.isLoggedIn = true;
    // }
    // else{
    //   this.isLoggedIn = false;
    // }
  }

}
