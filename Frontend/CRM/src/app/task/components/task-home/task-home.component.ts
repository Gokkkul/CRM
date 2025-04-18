import { Component, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { TaskService } from '../../services/task.service';
import $ from 'jquery';
import 'datatables.net';
import { ITask } from '../../../models/model';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { ViewTaskComponent } from '../view-task/view-task.component';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-task-home',
  standalone: false,
  templateUrl: './task-home.component.html',
  styleUrl: './task-home.component.css',
})
export class TaskHomeComponent {
  
  selectedTask: any;
  tasks: ITask[] = [];
  filteredTasks: ITask[] = [];
  page: number = 1;
  pageSize: number = 5;
  isLoading = false;

  @ViewChild('viewTask', { read: ViewContainerRef })
  viewTaskContainer!: ViewContainerRef;
  private viewTaskComponentRef!: ComponentRef<ViewTaskComponent>;

  @ViewChild('editTask', { read: ViewContainerRef })
  editTaskContainer!: ViewContainerRef;
  private editTaskComponentRef!: ComponentRef<EditTaskComponent>;

  @ViewChild('addTask', { read: ViewContainerRef })
  addTaskContainer!: ViewContainerRef;
  private addTaskComponentRef!: ComponentRef<AddTaskComponent>;


  userRole = 'employee'

  constructor(private taskService: TaskService, private swal: SweetAlertService, sharedService: SharedService) {
    sharedService.userRole$.subscribe(role => {
      this.userRole = role;
    })
  }

  ngOnInit(): void {
    this.isLoading = true
    this.taskService.task$.subscribe((data: any) => {
      if(data.length) this.isLoading = false;
      this.tasks = data;
      this.filteredTasks = [...this.tasks];
      // console.log(data[0].assignedTo.name);
    //   setTimeout(() => {
    //     $('#example').DataTable();
    // }, 300);
    });
    
  }

  handleSearch(keyword: string): void {
    this.filteredTasks = this.tasks.filter(task =>
      task.description.toLowerCase().includes(keyword.toLowerCase()) || // Search by name
      task.assignedTo?.name.toLowerCase().includes(keyword.toLowerCase()) || // Search by email
      task.status.toLowerCase().includes(keyword.toLowerCase())  // Search by phone (optional)
      // task.handledBy.name.toLowerCase().includes(keyword.toLowerCase()) // Search by address (optional)
    );
  }

  showAddTask() {
    this.addTaskContainer.clear();
    this.addTaskComponentRef = this.addTaskContainer.createComponent(AddTaskComponent);
    this.addTaskComponentRef.instance.visible = true;
  }

  showEditTask(task: ITask, index: number) {
    this.editTaskContainer.clear(); // Clear previous instances if any

    this.selectedTask = { task, index }; // Assign the selected task
    
    
    

    // Dynamically create and inject the child component
    this.editTaskComponentRef = this.editTaskContainer.createComponent(EditTaskComponent);

    // Pass the selected task data to the child component
    console.log("select task: ",this.selectedTask.task);
    this.editTaskComponentRef.instance.taskData = this.selectedTask.task ;
    console.log("🚀 ~ TaskHomeComponent ~ showEditTask ~ this.editTaskComponentRef.instance.taskData:", this.editTaskComponentRef.instance.taskData)

    // console.log();
    
    
    
    console.log("select index: ",this.selectedTask.index);
    this.editTaskComponentRef.instance.taskIndex = this.selectedTask.index
    

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
