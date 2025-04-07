import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  addUserForm: FormGroup;

  constructor(private fb: FormBuilder) {
      this.addUserForm = this.fb.group({
          name: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          role: ['', [Validators.required]],
          isDeleted: [false]
      });
  }

  addUser() {
      if (this.addUserForm.valid) {
          console.log(this.addUserForm.value);
          // Logic to add user
      }
  }
}
