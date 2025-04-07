import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-edit-task',
  standalone: false,
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {

  @Input() visible: boolean = false; // Controls dialog visibility
  @Input() taskData: any; // Receives selected task data
  @Input() taskIndex!: number; // Index of the task being edited

  taskForm!: FormGroup; // Reactive form instance

  statusOptions = [
    { label: 'Pending', value: 'pending' },
    { label: 'Completed', value: 'completed' },
  ];

  constructor(private fb: FormBuilder, private taskService: TaskService, private swal: SweetAlertService) {
    this.initForm();
  }

  ngOnChanges() {
    if (this.taskData) {
      this.taskForm.patchValue(this.taskData); // Update form values with incoming task data
    }
  }

  initForm() {
    // Initialize the form with default values
    this.taskForm = this.fb.group({
      description: [this.taskData?.description || '', ],
      dueDate: [this.taskData?.dueDate || '', ],
      status: [this.taskData?.status || '', ],
      assignedTo: [this.taskData?.assignedTo || ''], // Optional field
    });
  }

  onUpdate() {
    if (this.taskForm.valid) {
      console.log('Updated Task:', this.taskForm.value);

      this.taskService.updateTask(this.taskForm.value, this.taskIndex).subscribe(
        (response) => {
          console.log('Task successfully updated:', response);

          // Show success message
          this.swal.showToast('Task updated successfully.', 'success');
          this.visible = false; // Close the dialog after successful update
        },
        (error) => {
          console.error('Error updating task:', error);

          // Show error message
          this.swal.showToast('Failed to update task. Please try again.', 'error');
        }
      );
    }
  }
}
