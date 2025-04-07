import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input() visible: boolean = false; // Controls dialog visibility
  taskForm!: FormGroup; // Reactive form instance

  statusOptions = [
    { label: 'Pending', value: 'pending' },
    { label: 'Completed', value: 'completed' },
  ];

  constructor(private fb: FormBuilder, private taskService: TaskService, private swal: SweetAlertService) {
    this.initForm();
  }

  initForm() {
    // Initialize the form with default values
    this.taskForm = this.fb.group({
      description: ['', Validators.required], // Description is required
      dueDate: ['', Validators.required], // Due date is required
      status: ['', Validators.required], // Status is required
      assignedTo: [''], // AssignedTo is optional
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      console.log('Task data:', this.taskForm.value);

      this.taskService.addTask(this.taskForm.value).subscribe(
        (response) => {
          console.log('Task successfully added:', response);

          // Display success toast message
          this.swal.showToast('Task added successfully.', 'success');
          this.visible = false; // Close the dialog after successful submission
        },
        (error) => {
          console.error('Error adding task:', error);

          // Display error toast message
          this.swal.showToast('There was a problem adding the task. Please try again.', 'error');
        }
      );
    }
  }
}
