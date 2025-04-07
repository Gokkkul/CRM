import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService: UserService){}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  // constructor(private authService:AuthService){
    
  // }
  loginUser(){
    // console.log(this.loginForm.value);
    
    // this.authService.loginUser(this.loginForm.value).subscribe((result:any)=>{
    //   localStorage.setItem("usertoken",result.token)
      // alert(result.message);
    // })
    this.userService.login();
  }
}
