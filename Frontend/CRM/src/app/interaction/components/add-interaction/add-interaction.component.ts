import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../../customer/services/customer.service';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-add-interaction',
  standalone: false,
  templateUrl: './add-interaction.component.html',
  styleUrl: './add-interaction.component.css',
})
export class AddInteractionComponent {
  visible: boolean = false; // Controls dialog visibility
  interactionForm!: FormGroup; // Reactive form instance
  customers: any[] = []; // Array to hold customer data
  interactionTypes = [
    {type: 'Email', value: 'email'},
    {type: 'Call', value: 'call'},
    {type: 'Meeting', value: 'meeting'}
  ]; // Predefined interaction types

  constructor(
    private fb: FormBuilder,
    private interactionService: InteractionService,
    private customerService: CustomerService,
    private swal: SweetAlertService
  ) {}

  ngOnInit(): void {
    // Fetch customers for dropdown
    this.customerService.getcustomers();

    this.customerService.customer$.subscribe((data) => {
      this.customers = data;
    });

    // Initialize the form with FormBuilder
    this.interactionForm = this.fb.group({
      customer: ['', Validators.required], // Customer is required
      type: ['', Validators.required], // Type is required
      date: ['', Validators.required], // Date is required
      notes: [''], // Notes are optional
      followUpDate: [''], // Follow-up date is optional
      isDeleted: [false], // Default to not deleted
    });
  }

  onSubmit(): void {
    if (this.interactionForm.valid) {
      console.log('Interaction data:', this.interactionForm.value);
      this.interactionService
        .addInteraction(this.interactionForm.value)
        .subscribe(
          (response) => {
            console.log(`Interaction successfully logged: `, response);
            this.swal.showToast('Interaction Added successfully.', 'success');
          },
          (error) => {
            console.error(`Error while adding interaction: `, error);
            this.swal.showToast(
              'There was a problem in adding interaction. Please try again.',
              'error'
            );
          }
        );
      // Close the dialog after saving
      this.visible = false;
    }
  }
}
