import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { LeadService } from '../../services/lead.service';

@Component({
  selector: 'app-add-lead',
  standalone: false,
  templateUrl: './add-lead.component.html',
  styleUrl: './add-lead.component.css'
})
export class AddLeadComponent {
  @Input() visible: boolean = false; // Controls dialog visibility
  leadForm!: FormGroup; // Reactive form instance

  statusOptions = [
    { label: 'New', value: 'new' },
    { label: 'Contacted', value: 'contacted' },
    { label: 'Qualified', value: 'qualified' },
  ];

  constructor(private fb: FormBuilder, private leadService: LeadService, private swal: SweetAlertService) {
    this.initForm();
  }

  initForm() {
    // Initialize the form with default values
    this.leadForm = this.fb.group({
      name: ['', Validators.required], // Name is required
      email: ['', [Validators.required, Validators.email]], // Email is required and must be valid
      phone: ['', Validators.pattern(/^[0-9]+$/)], // Phone is optional but must be valid if provided
      status: ['', Validators.required], // Status is required
      assignedTo: [''], // Optional field
      source: [''], // Optional field
      isDeleted: [false], // Default to not deleted
    });
  }

  onSubmit() {
    if (this.leadForm.valid) {
      console.log('Lead data:', this.leadForm.value);

      this.leadService.addLead(this.leadForm.value).subscribe(
        (response) => {
          console.log('Lead successfully added:', response);

          // Display success toast message
          this.swal.showToast('Lead added successfully.', 'success');
          this.visible = false; // Close the dialog after successful submission
        },
        (error) => {
          console.error('Error adding lead:', error);

          // Display error toast message
          this.swal.showToast('There was a problem adding the lead. Please try again.', 'error');
        }
      );
    }
  }
}
