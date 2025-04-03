import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-task-home',
  standalone: false,
  templateUrl: './task-home.component.html',
  styleUrl: './task-home.component.css',
})
export class TaskHomeComponent {
  constructor(private taskService: TaskService) {}
  
  tasks: any;

  ngOnInit() {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data;
      setTimeout(() => {
        $('#example').DataTable();
      }, 1);
    });
  }

  // showAddTask(): void {
  //   console.log('Opening Add Task Dialog');
  // }

  showViewTask(task: any): void {
    // this.selectedTask = task;
    // this.visible = true;
  }

  // showEditTask(task: any): void {

  //   console.log('Editing Task:', task);
  // }

  // deleteTask(taskId: number): void {

  //   console.log('Deleting Task with ID:', taskId);
  // }

  // closeDialog(): void {
  //   this.visible = false;
  // }
}
