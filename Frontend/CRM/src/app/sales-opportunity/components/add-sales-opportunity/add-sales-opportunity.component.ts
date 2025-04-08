import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalesOpportunityService } from '../../services/sales-opportunity.service';
import { CustomerService } from '../../../customer/services/customer.service';

@Component({
  selector: 'app-add-sales-opportunity',
  standalone: false,
  templateUrl: './add-sales-opportunity.component.html',
  styleUrl: './add-sales-opportunity.component.css'
})
export class AddSalesOpportunityComponent {
  @Input() visible: boolean = false;
  @Input() customers: any[] = []; // List of customers for dropdown

  salesOpportunityForm!: FormGroup;

  constructor(private fb: FormBuilder, private salesOpportunityService: SalesOpportunityService, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getcustomers();

    this.customerService.customer$.subscribe((data) => {
      this.customers = data;
    });

    this.salesOpportunityForm = this.fb.group({
      stage: ['', Validators.required],
      customer: ['', Validators.required], // Customer dropdown selection
      lead: [''],
      value: ['', [Validators.required, Validators.min(0)]],
      expectedCloseDate: [''],
      notes: ['']
    });
  }


  
  

  onSubmit() {
    if (this.salesOpportunityForm.valid) {
      const newOpportunity = this.salesOpportunityForm.value;
      this.salesOpportunityService.addSalesOpportunity(newOpportunity)
        .subscribe(() => {
          console.log("Sales opportunity added successfully!");
          this.visible = false;
        });
    }
  }
}
