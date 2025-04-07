import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  @Input() visible: boolean = false; // Controls dialog visibility
  userForm!: FormGroup; // Reactive form instance

  roleOptions = [
    { label: 'Admin', value: 'admin' },
    { label: 'Sales Representative', value: 'sales_rep' },
    { label: 'Manager', value: 'manager' },
  ];

  constructor(private fb: FormBuilder, private userService: UserService, private swal: SweetAlertService) {
    this.initForm();
  }

  initForm() {
    // Initialize form fields
    this.userForm = this.fb.group({
      name: ['', Validators.required], // Name is required
      email: ['', [Validators.required, Validators.email]], // Email is required and must be valid
      password: ['', Validators.required], // Password is required
      role: ['', Validators.required], // Role is required
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('User data:', this.userForm.value);

      this.userService.addUser(this.userForm.value).subscribe(
        (response) => {
          console.log('User successfully added:', response);

          // Show success message
          this.swal.showToast('User added successfully.', 'success');
          this.visible = false; // Close the dialog after saving
        },
        (error) => {
          console.error('Error adding user:', error);

          // Show error message
          this.swal.showToast('Failed to add user. Please try again.', 'error');
        }
      );
    }
  }
}
