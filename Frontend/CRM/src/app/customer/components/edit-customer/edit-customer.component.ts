import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-edit-customer',
  standalone: false,
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent {
  editCustomerForm!: FormGroup;
  customerId!: number;
  

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // Get the customer ID from route
    this.customerId = +this.route.snapshot.paramMap.get('id')!;

    // Initialize form
    this.editCustomerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[0-9]+$/)]],
      address: [''], 
      company: [''],
    });

    // Fetch customer data and populate the form
    this.customerService.getcustomers().subscribe((customers:any) => {
      console.log(customers);
      
      const customer = customers.find((c:any) => c.id === this.customerId);
      if (customer) {
        this.editCustomerForm.patchValue({
          name: customer.name,
          email: customer.email,
          phone: customer.phone,
          address: customer.address,
          company: customer.company,
        });
      }
    });
  }

  onSave() {
    if (this.editCustomerForm.valid) {
      const updatedCustomer = { id: this.customerId, ...this.editCustomerForm.value };
      console.log('Updated Customer:', updatedCustomer);

      // Call service to save updated customer details
      // Example: this.customerService.updateCustomer(updatedCustomer).subscribe();

      alert('Customer updated successfully!');
    } else {
      console.error('Form is invalid');
    }
  }
}
