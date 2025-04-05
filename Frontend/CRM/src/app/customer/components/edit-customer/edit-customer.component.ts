import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { ICustomer } from '../customer-home/customer-home.component';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';

@Component({
  selector: 'app-edit-customer',
  standalone: false,
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css',
})
export class EditCustomerComponent  implements OnChanges{
  // editCustomerForm!: FormGroup;
  // customerId!: number;

  // constructor(
  //   private route: ActivatedRoute,
  //   private customerService: CustomerService,
  //   private fb: FormBuilder
  // ) {}

  // ngOnInit() {
  //   // Get the customer ID from route
  //   this.customerId = +this.route.snapshot.paramMap.get('id')!;

  //   // Initialize form
  //   this.editCustomerForm = this.fb.group({
  //     name: ['', [Validators.required, Validators.minLength(3)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     phone: ['', [Validators.pattern(/^[0-9]+$/)]],
  //     address: [''],
  //     company: [''],
  //   });

  //   // Fetch customer data and populate the form
  //   this.customerService.getcustomers().subscribe((customers:any) => {
  //     console.log(customers);

  //     const customer = customers.find((c:any) => c.id === this.customerId);
  //     if (customer) {
  //       this.editCustomerForm.patchValue({
  //         name: customer.name,
  //         email: customer.email,
  //         phone: customer.phone,
  //         address: customer.address,
  //         company: customer.company,
  //       });
  //     }
  //   });
  // }

  // onSave() {
  //   if (this.editCustomerForm.valid) {
  //     const updatedCustomer = { id: this.customerId, ...this.editCustomerForm.value };
  //     console.log('Updated Customer:', updatedCustomer);

  //     // Call service to save updated customer details
  //     // Example: this.customerService.updateCustomer(updatedCustomer).subscribe();

  //     alert('Customer updated successfully!');
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }

  @Input() customerData!: ICustomer; // Receives selected customer data
  @Input() customerIndex!: number;
  @Input() visible: boolean = false; // Controls visibility of the dialog

  customerForm!: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private swal: SweetAlertService) {}

  ngOnInit(): void {
    // Initialize the form with the incoming customer data
    this.customerForm = this.fb.group({
      name: [this.customerData?.name || '', Validators.required],
      email: [this.customerData?.email || '', [Validators.required, Validators.email]],
      phone: [this.customerData?.phone || ''],
      address: [this.customerData?.address || ''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Update the form values when the customer data changes
    if (this.customerData) {
        this.customerForm.patchValue(this.customerData);
    }

    // Check if 'visible' has changed
    if (changes['visible']?.currentValue) {
        this.visible = false; // Your logic here
    }
}

  // onUpdate(): void {
  //   if (this.customerForm.valid) {
  //     console.log('Updated Customer:', this.customerForm.value);

  //     this.customerService.updateCustomer(this.customerForm.value, this.customerIndex).subscribe(data=>{
  //       console.log(data);

        
        
  //     });
  //     // Add logic to update customer in the backend
  //     this.visible = false; // Close the dialog after saving
  //   }
  // }
  
  

  onUpdate(): void {
    
    if (this.customerForm.valid) {
     
  
          // Proceed with updating the customer
          console.log('Updated Customer:', this.customerForm.value);
  
          this.customerService
            .updateCustomer(this.customerForm.value, this.customerIndex)
            .subscribe(
              data => {
                console.log(data);
  
                // Show success alert after update
                // this.swal.showSuccess('Customer details have been updated successfully.')
                this.swal.showToast('Customer details have been updated successfully.','success')
  
                this.visible = false; // Close the dialog after saving
              
              (error: any) => {
                console.error('Update error:', error);
  
                // Show error alert if update fails
                // this.swal.showError('There was a problem updating customer details. Please try again.')
                this.swal.showToast('There was a problem updating customer details. Please try again.','error')
              }
      });
    }
  }
  
}
