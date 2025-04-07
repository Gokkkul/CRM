import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../models/model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/users'; // Replace with your actual API endpoint

  private users: IUser[] = []; // Local user array
  private userSubject = new BehaviorSubject<IUser[]>(this.users); // Observable for components
  user$ = this.userSubject.asObservable(); // Expose user data as observable

  constructor(private http: HttpClient) {
    this.getUsers(); // Fetch users upon initialization
  }

  // Fetch all users
  getUsers() {
    this.http.get<{ result: IUser[] }>(this.apiUrl + '/get-users').subscribe((data) => {
      this.users = data.result; // Update the local user array
      this.userSubject.next(this.users); // Emit the updated users
    });
  }

  // Add a new user
  addUser(data: any) {
    this.users.push(data); // Update the local users array
    this.userSubject.next(this.users); // Emit the updated users
    return this.http.post(this.apiUrl + '/add-user', data); // Send data to the API
  }

  // Update an existing user
  updateUser(data: IUser, index: number) {
    this.users[index].name = data.name;
    this.users[index].email = data.email;
    this.users[index].role = data.role;
    this.users[index].isDeleted = data.isDeleted;
    this.userSubject.next(this.users); // Emit the updated users

    console.log('This is from UserService:', this.users[index]);
    const { id, ...updatedObj } = this.users[index]; // Exclude the `id` field
    return this.http.put(this.apiUrl + `/update-user/${id}`, updatedObj); // Send the updated data to the API
  }

  // Delete a user
  deleteUser(index: number) {
    const { id } = this.users[index];
    this.users = this.users.filter((user) => user.id !== id); // Remove the user locally
    this.userSubject.next(this.users); // Emit the updated users
    console.log('Deleted user:', id);
    return this.http.delete(this.apiUrl + `/delete-user/${id}`); // Send delete request to the API
  }
}
