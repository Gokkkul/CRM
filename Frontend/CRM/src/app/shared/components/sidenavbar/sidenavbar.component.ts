import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sidenavbar',
  standalone: false,
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.css'
})
export class SidenavbarComponent {

   sidebarMenu = ['dashboard', 'customers', 'interactions', 'sales opportunity', 'leads', 'email logs', 'tasks', 'reports', 'users'];
   constructor(private sharedService: SharedService){
    this.sharedService.userRole$.subscribe(role=>{
      if(role=='employee'){
        this.sidebarMenu = ['dashboard', 'customers', 'interactions', 'sales opportunity', 'leads', 'email logs', 'tasks']
      }
    })
   }

   toggleActive(event: any) {
    const elements = document.querySelectorAll('.nav-item');
    elements.forEach(el => el.classList.remove('active-item'));
    event.currentTarget.classList.add('active-item');
  }

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}