import { Component } from '@angular/core';
import { UserService } from '../../../user/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private userService: UserService, private router: Router){}

logout(){
  this.userService.logout()
}

profile(){
  this.router.navigate(['users/profile'])
}
}
