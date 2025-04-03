import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-home',
  standalone: false,
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

  users: any;

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getUser().subscribe((data: any) => {
      this.users = data;
    })
  }
  showViewUser(user: any){

  }
}
