import { Component, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { TaskService } from '../../services/task.service';
import $ from 'jquery';
import 'datatables.net';
import { ITask } from '../../../models/model';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { ViewTaskComponent } from '../view-task/view-task.component';

@Component({
  selector: 'app-task-home',
  standalone: false,
  templateUrl: './task-home.component.html',
  styleUrl: './task-home.component.css',
})
export class TaskHomeComponent {
  
  selectedTask: any;
  tasks: ITask[] = [];

  @ViewChild('viewTask', { read: ViewContainerRef })
  viewTaskContainer!: ViewContainerRef;
  private viewTaskComponentRef!: ComponentRef<ViewTaskComponent>;

  @ViewChild('editTask', { read: ViewContainerRef })
  editTaskContainer!: ViewContainerRef;
  private editTaskComponentRef!: ComponentRef<EditTaskComponent>;

  @ViewChild('addTask', { read: ViewContainerRef })
  addTaskContainer!: ViewContainerRef;
  private addTaskComponentRef!: ComponentRef<AddTaskComponent>;

  constructor(private taskService: TaskService, private swal: SweetAlertService) {
    // console.log("From Task Home: ",this.selectedTask.task);
    // console.log("From Task Home: ",this.selectedTask.index);
  }

  ngOnInit(): void {
    this.taskService.task$.subscribe((data: any) => {
      this.tasks = data;
      // console.log(data[0].assignedTo.name);
      setTimeout(() => {
        $('#example').DataTable();
    }, 300);
    });
    
  }

  showAddTask() {
    this.addTaskContainer.clear();
    this.addTaskComponentRef = this.addTaskContainer.createComponent(AddTaskComponent);
    this.addTaskComponentRef.instance.visible = true;
  }

  showEditTask(task: ITask, index: number) {
    this.editTaskContainer.clear(); // Clear previous instances if any

    this.selectedTask = { task, index }; // Assign the selected task
    console.log(this.selectedTask.task);
    
    

    // Dynamically create and inject the child component
    this.editTaskComponentRef = this.editTaskContainer.createComponent(EditTaskComponent);

    // Pass the selected task data to the child component
    this.editTaskComponentRef.instance.taskData = this.selectedTask.task;
    
    this.editTaskComponentRef.instance.taskIndex = this.selectedTask.index;
    

    // Make the dialog visible
    this.editTaskComponentRef.instance.visible = true;
  }

  showViewTask(task: ITask) {
    this.viewTaskContainer.clear(); // Clear previous instances if any

    this.selectedTask = task; // Assign the selected task

    // Dynamically create and inject the child component
    this.viewTaskComponentRef = this.viewTaskContainer.createComponent(ViewTaskComponent);

    // Pass the selected task data to the child component
    this.viewTaskComponentRef.instance.taskData = this.selectedTask;

    // Make the dialog visible
    this.viewTaskComponentRef.instance.visible = true;
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index).subscribe(() => {
      this.swal.showToast('Task Deleted Successfully.', 'success');
    });
  }
}
