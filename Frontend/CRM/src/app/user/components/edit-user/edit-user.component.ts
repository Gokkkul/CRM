import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  standalone: false,
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit{
  @Input() visible: boolean = false; // Controls dialog visibility
  @Input() userData: any; // Receives selected user data
  @Input() userIndex!: number; // Index of the user being edited

  userForm!: FormGroup; // Reactive form instance

  roleOptions = [
    { label: 'Admin', value: 'admin' },
    { label: 'Employee', value: 'employee' },
    { label: 'Manager', value: 'manager' },
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private swal: SweetAlertService
  ) {
    
  }
  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges() {
    if (this.userData) {
      this.userForm.patchValue(this.userData); // Update form values with incoming user data
    }
  }

  initForm() {
    // Initialize form fields
    this.userForm = this.fb.group({
      name: [this.userData?.name || ''],
      email: [
        this.userData?.email || '',
        [Validators.email],
      ],
      password: ['',], // Password is required
      role: [this.userData?.role || '',], // Role is required
    });
  }

  onUpdate() {
    if (this.userForm.valid) {
      console.log('Updated User:', this.userForm.value);

      this.userService
        .updateUser(this.userForm.value, this.userIndex)
        .subscribe(
          (response) => {
            console.log('User successfully updated:', response);

            // Show success message
            this.swal.showToast('User updated successfully.', 'success');
            this.visible = false; // Close the dialog after saving
          },
          (error) => {
            console.error('Error updating user:', error);

            // Show error message
            this.swal.showToast(
              'Failed to update user. Please try again.',
              'error'
            );
          }
        );
    }
  }
}
