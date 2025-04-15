import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../../models/model';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-edit-task',
  standalone: false,
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent implements OnInit {
  @Input() visible: boolean = false; // Controls dialog visibility
  @Input() taskData!: ITask; // Receives selected task data
  @Input() taskIndex!: number; // Index of the task being edited

  taskForm!: FormGroup; // Reactive form instance

  statusOptions = [
    { status: 'Pending', value: 'pending' },
    { status: 'Completed', value: 'completed' },
  ];

  userOptions!: { user: string; value: number }[];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private swal: SweetAlertService,
    private userService: UserService
  ) {}
  ngOnInit(): void {


    this.userService.user$.subscribe((data: any[]) => {
      this.userOptions = data.map(user => ({
        user: user.name, // Replace `name` with the actual property of user data
        value: user.id   // Replace `id` with the unique identifier or relevant value
      }));

      console.log(this.userOptions);
      

      // console.log("Hello",typeof(data[0].id));
      
    });

    this.taskForm = this.fb.group({
      description: [this.taskData?.description || ''],
      dueDate: [this.taskData?.dueDate || ''],
      status: [this.taskData?.status || ''],
      assignedTo: [this.taskData?.assignedTo?.id || ''],
    });
  }

  ngOnChanges() {
    if (this.taskData) {
      this.taskForm.patchValue(this.taskData); // Update form values with incoming task data
    }
  }

  // initForm() {
  //   // Initialize the form with default values
  //   // this.taskForm = this.fb.group({
  //   //   description: [this.taskData?.description || '', ],
  //   //   dueDate: [this.taskData?.dueDate || '', ],
  //   //   status: [this.taskData?.status || '' ],
  //   //   // status: [ 'pending' ],
  //   //   assignedTo: [this.taskData?.assignedTo || ''], // Optional field
  //   // });
  //   this.taskForm = this.fb.group({
  //     description: [this.taskData?.description || '',],
  //     dueDate: [this.taskData?.dueDate || '',],
  //     status: [this.taskData?.status || '',],
  //     assignedTo: [this.taskData?.assignedTo || '',],
  //   });
  // }

  onUpdate() {
    if (this.taskForm.valid) {
      console.log('Updated Task:', this.taskForm.value);

      this.taskService
        .updateTask(this.taskForm.value, this.taskIndex)
        .subscribe(
          (response) => {
            console.log('Task successfully updated:', response);

            // Show success message
            this.swal.showToast('Task updated successfully.', 'success');
            this.visible = false; // Close the dialog after successful update
          },
          (error) => {
            console.error('Error updating task:', error);

            // Show error message
            this.swal.showToast(
              'Failed to update task. Please try again.',
              'error'
            );
          }
        );
    }
  }
}
