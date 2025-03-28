import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  standalone: false,
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  updateUserForm: FormGroup;

  constructor(private fb: FormBuilder) {
      this.updateUserForm = this.fb.group({
          name: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          role: ['', [Validators.required]],
          isDeleted: [false]
      });
  }

  updateUser() {
      if (this.updateUserForm.valid) {
          console.log(this.updateUserForm.value);
          // Logic to add user
      }
  }
}
