import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
  }
}
