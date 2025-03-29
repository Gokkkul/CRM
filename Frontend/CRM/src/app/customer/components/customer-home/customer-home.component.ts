import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-home',
  standalone: false,
  templateUrl: './customer-home.component.html',
  styleUrl: './customer-home.component.css'
})
export class CustomerHomeComponent {
  handleAction(action: string) {
    console.log(`${action} clicked`);
    // Add logic for navigating to respective pages or opening modals.
  }
}
