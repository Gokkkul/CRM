import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: any;

  constructor(private userService: UserService,private sharedService: SharedService) {}

  ngOnInit(): void {
    this.userService.getUserById().subscribe((data=>{
    this.user = data
    // console.log(this.user.result.id);
    
    }))
    
  }
}
