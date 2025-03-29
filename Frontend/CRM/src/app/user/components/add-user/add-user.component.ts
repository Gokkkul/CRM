import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
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
