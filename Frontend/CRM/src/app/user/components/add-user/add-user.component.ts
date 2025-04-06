import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  // addUserForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //     this.addUserForm = this.fb.group({
  //         name: ['', [Validators.required]],
  //         email: ['', [Validators.required, Validators.email]],
  //         password: ['', [Validators.required, Validators.minLength(6)]],
  //         role: ['', [Validators.required]],
  //         isDeleted: [false]
  //     });
  // }

  // addUser() {
  //     if (this.addUserForm.valid) {
  //         console.log(this.addUserForm.value);
  //         // Logic to add user
  //     }
  // }

  addUserForm!: FormGroup;
  visible: boolean = false; // For controlling the visibility of the dialog

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  // Submit form handler
  addUser() {
    if (this.addUserForm.valid) {
      // Handle user addition logic here (e.g., send the data to the backend)
      console.log('User Added:', this.addUserForm.value);
      this.visible = false;  // Hide the dialog after submission
    }
  }
}
