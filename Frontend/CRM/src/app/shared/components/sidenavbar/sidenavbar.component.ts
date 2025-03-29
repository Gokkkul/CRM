import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  standalone: false,
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.css'
})
export class SidenavbarComponent {

   sidebarMenu = ['dashboard', 'customers', 'interactions', 'sales opportunity', 'leads', 'email logs', 'tasks', 'reports', 'users'];

   toggleActive(event: any) {
    const elements = document.querySelectorAll('.nav-item');
    elements.forEach(el => el.classList.remove('active-item'));
    event.currentTarget.classList.add('active-item');
  }
}