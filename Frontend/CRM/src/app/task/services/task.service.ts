import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../../models/model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private apiUrl = 'http://localhost:3000/api/task';

  private tasks: ITask[] = [];
  private taskSubject = new BehaviorSubject<ITask[]>(this.tasks);
  task$ = this.taskSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  // Fetch all tasks
  getTasks() {
    this.http.get<{ result: ITask[] }>(this.apiUrl + '/get-tasks').subscribe((data) => {
      this.tasks = data.result;
      this.taskSubject.next(this.tasks); // Emit the updated tasks
    });
  }

  // Add a new task
  addTask(data: any) {
    this.tasks.push(data); // Update the local tasks array
    this.taskSubject.next(this.tasks); // Emit the updated tasks
    return this.http.post(this.apiUrl + '/add-task', data); // Send data to the API
  }

  // Update an existing task
  updateTask(data: ITask, index: number) {
    this.tasks[index].description = data.description;
    this.tasks[index].dueDate = data.dueDate;
    this.tasks[index].status = data.status;
    this.tasks[index].assignedTo = data.assignedTo;
    this.taskSubject.next(this.tasks); // Emit the updated tasks

    console.log('This is from TaskService:', this.tasks[index]);
    const { id, ...updatedObj } = this.tasks[index]; // Exclude the `id` field
    return this.http.put(this.apiUrl + `/update-task/${id}`, updatedObj); // Send the updated data to the API
  }

  // Delete a task
  deleteTask(index: number) {
    const { id } = this.tasks[index];
    this.tasks = this.tasks.filter((task) => task.id !== id); // Remove the task locally
    this.taskSubject.next(this.tasks); // Emit the updated tasks
    console.log('Deleted task:', id);
    return this.http.delete(this.apiUrl + `/delete-task/${id}`); // Send delete request to the API
  }
}
