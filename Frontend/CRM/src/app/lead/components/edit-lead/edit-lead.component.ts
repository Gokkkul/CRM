import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILead, IUser } from '../../../models/model';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { LeadService } from '../../services/lead.service';
import { UserService } from '../../../user/services/user.service';
import { data, valHooks } from 'jquery';

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

  users!: IUser[]
  userOptions: {user: string, value: string}[] = [];

  statusOptions = [
    
      {status: 'New', value: 'new'},
      {status: 'Contacted', value: 'contacted'},
      {status: 'Qualified', value: 'qualified'},
      {status: 'Lost', value: 'lost'}
  ]
  
  leadForm!: FormGroup;

  constructor(private fb: FormBuilder, private leadService: LeadService, private swal: SweetAlertService, private userService: UserService) {}

  ngOnInit(): void {

    this.userService.user$.subscribe((data: any[]) => {
      // Assuming `data` is an array of users with properties like `name` and `id`
      this.userOptions = data.map(user => ({
        user: user.name, // Replace `name` with the actual property of user data
        value: user.name   // Replace `id` with the unique identifier or relevant value
      }));
    });
    // Initialize the form with the incoming lead data
    this.leadForm = this.fb.group({
      name: [this.leadData?.name || '', ],
      email: [this.leadData?.email || '', [ Validators.email]],
      phone: [this.leadData?.phone || '', [Validators.pattern(/^[0-9]+$/)]],
      // status: [this.leadData?.status || ''],
      status: [this.leadData.status || ''],
      assignedTo: [this.leadData?.assignedTo?.name || ''],
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
