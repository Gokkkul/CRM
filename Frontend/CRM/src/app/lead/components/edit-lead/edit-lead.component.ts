import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILead } from '../../../models/model';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { LeadService } from '../../services/lead.service';

@Component({
  selector: 'app-edit-lead',
  standalone: false,
  templateUrl: './edit-lead.component.html',
  styleUrl: './edit-lead.component.css'
})
export class EditLeadComponent {
  @Input() leadData!: ILead; // Receives selected lead data
  @Input() leadIndex!: number; // Receives the lead index
  @Input() visible: boolean = false; // Controls visibility of the dialog

  statusOptions = [] = ['new', 'contacted', 'qualified']

  leadForm!: FormGroup;

  constructor(private fb: FormBuilder, private leadService: LeadService, private swal: SweetAlertService) {}

  ngOnInit(): void {
    // Initialize the form with the incoming lead data
    this.leadForm = this.fb.group({
      name: [this.leadData?.name || '', Validators.required],
      email: [this.leadData?.email || '', [Validators.required, Validators.email]],
      phone: [this.leadData?.phone || '', [Validators.pattern(/^[0-9]+$/)]],
      status: [this.leadData?.status || '', Validators.required],
      assignedTo: [this.leadData?.assignedTo || ''],
      source: [this.leadData?.source || ''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Update the form values when the lead data changes
    if (this.leadData) {
      this.leadForm.patchValue(this.leadData);
    }

    // Check if 'visible' has changed
    if (changes['visible']?.currentValue) {
      this.visible = false; // Your logic here
    }
  }

  onUpdate(): void {
    if (this.leadForm.valid) {
      // Proceed with updating the lead
      console.log('Updated Lead:', this.leadForm.value);

      this.leadService.updateLead(this.leadForm.value, this.leadIndex).subscribe(
        (data) => {
          console.log(data);

          // Show success alert after update
          this.swal.showToast('Lead details have been updated successfully.', 'success');

          this.visible = false; // Close the dialog after saving
        },
        (error: any) => {
          console.error('Update error:', error);

          // Show error alert if update fails
          this.swal.showToast('There was a problem updating lead details. Please try again.', 'error');
        }
      );
    }
  }
}
