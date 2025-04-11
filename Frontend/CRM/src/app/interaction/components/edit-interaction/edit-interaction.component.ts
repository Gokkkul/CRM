import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../../customer/services/customer.service';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { InteractionService } from '../../services/interaction.service';


@Component({
  selector: 'app-edit-interaction',
  standalone: false,
  templateUrl: './edit-interaction.component.html',
  styleUrl: './edit-interaction.component.css'
})


export class EditInteractionComponent {
  @Input() interactionData!: any; // Receives selected interaction data
  @Input() interactionIndex!: number;
  @Input() visible: boolean = false; // Controls visibility of the dialog

  interactionForm!: FormGroup;
  customers: any[] = []; // List of customers
  interactionTypes: string[] = ['Email', 'Call', 'Meeting']; // Predefined interaction types
  interactionTypesOptions = [
    { type: 'Call', value: 'call' },
    { type: 'Meeting', value: 'meeting' },
    { type: 'Email', value: 'email' }
  ];
  

  constructor(
    private fb: FormBuilder,
    private interactionService: InteractionService,
    private customerService: CustomerService,
    private swal: SweetAlertService,
  ) {
    // console.log(this.interactionData.type);
    
  }

  ngOnInit(): void {
    // Fetch customers for dropdown
    this.customerService.getcustomers();

    this.customerService.customer$.subscribe((data) => {
      this.customers = data;
    });

    console.log({
     data: this.interactionData
    });
    

    // Initialize the form
    this.interactionForm = this.fb.group({
      // customer: [this.interactionData.customer || '', ],
      type: [this.interactionData.type || ''], 
      // type: ['call'], 
      // type: [this.interactionData?.type || 'Call'], 
      date: [this.interactionData?.date || '', ],
      notes: [this.interactionData?.notes || ''],
      followUpDate: [this.interactionData?.followUpDate || ''],
    });
    
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   // Update form when interaction data changes
  //   if (this.interactionData) {
  //     this.interactionForm.patchValue(this.interactionData);
  //   }

  //   // Check if 'visible' has changed
  //   if (changes['visible']?.currentValue) {
  //     this.visible = false; // Your logic here, if needed
  //   }
  // }

  onUpdate(): void {
    if (this.interactionForm.valid) {
      console.log('Updated Interaction:', this.interactionForm.value);

      this.interactionService
        .updateInteraction(this.interactionForm.value, this.interactionIndex)
        .subscribe(
          (data) => {
            console.log(data);

            // Show success alert after update
            this.swal.showToast('Interaction details have been updated successfully.', 'success');

            this.visible = false; // Close the dialog after saving
          },
          (error) => {
            console.error('Update error:', error);

            // Show error alert if update fails
            this.swal.showToast('There was a problem updating interaction details. Please try again.', 'error');
          }
        );
    }
  }
}
