import { Component } from '@angular/core';
import { ICustomer } from '../customer-home/customer-home.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { error } from 'jquery';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';

@Component({
  selector: 'app-add-customer',
  standalone: false,
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  visible: boolean = false; // Controls dialog visibility
  customerForm!: FormGroup; // Reactive form instance

  constructor(private fb: FormBuilder, private customerService: CustomerService, private swal: SweetAlertService) {}

  ngOnInit(): void {
    // Initialize the form with FormBuilder
    this.customerForm = this.fb.group({
      name: ['', Validators.required], // Name is required
      email: ['', [Validators.required, Validators.email]], // Email is required and must be valid
      phone: [''], // Phone is optional
      address: [''], // Address is optional
      company: [''], // Company is optional
      isDeleted: [false] // Default to not deleted
    });
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      console.log('Customer data:', this.customerForm.value);
      this.customerService.addCustomer(this.customerForm.value).subscribe(
        response => {
          console.log(`Customer successfully added: `, response);
          this.swal.showToast('Customer Added successfully.','success')
      },
      error => {
        console.error(`Error while adding customer: `, error);
        this.swal.showToast('There was a problem in adding customer. Please try again.','error')
      }
    )
      // Call your service to save customer data to the backend
      this.visible = false; // Close the dialog after saving
    }
  }
}
