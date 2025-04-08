import { Component } from '@angular/core';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private userService: UserService){}

logout(){
  this.userService.logout()
}
}
