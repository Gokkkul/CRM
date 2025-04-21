import { Component } from '@angular/core';
import { UserService } from '../user/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor(private userService: UserService, private router: Router){}


  login(){
    this.router.navigate(['/dashboard'])
  }

  pageName!: string
}
