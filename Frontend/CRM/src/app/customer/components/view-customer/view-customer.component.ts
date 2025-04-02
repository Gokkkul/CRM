import { Component, Input } from '@angular/core';
import { ICustomer } from '../customer-home/customer-home.component';

@Component({
  selector: 'app-view-customer',
  standalone: false,
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent {
  @Input() customerData!: ICustomer; // Receives selected customer data
  @Input() visible: boolean = false; // Controls visibility of the dialog

  closeDialog(): void {
    this.visible = false;
  }
}
