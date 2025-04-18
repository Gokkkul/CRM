import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../../models/model';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { ViewUserComponent } from '../view-user/view-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-home',
  standalone: false,
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css',
})
export class UserHomeComponent {
  selectedUser: any;
  users: IUser[] = [];
  filteredUsers: IUser[] = [];
  page: number = 1;
  pageSize: number = 5;
  isLoading = false;

  @ViewChild('viewUser', { read: ViewContainerRef })
  viewUserContainer!: ViewContainerRef;
  private viewUserComponentRef!: ComponentRef<ViewUserComponent>;

  @ViewChild('editUser', { read: ViewContainerRef })
  editUserContainer!: ViewContainerRef;
  private editUserComponentRef!: ComponentRef<EditUserComponent>;

  @ViewChild('addUser', { read: ViewContainerRef })
  addUserContainer!: ViewContainerRef;
  private addUserComponentRef!: ComponentRef<AddUserComponent>;

  constructor(
    private userService: UserService,
    private swal: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.user$.subscribe((data: any) => {
      if(data.length) this.isLoading = false;
      this.users = data;
      this.filteredUsers = [...this.users];
      // console.log(data);
    //   setTimeout(() => {
    //     $('#example').DataTable();
    // }, 300);
      
    });
  }

  handleSearch(keyword: string): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(keyword.toLowerCase()) || // Search by name
      user.email.toLowerCase().includes(keyword.toLowerCase()) || // Search by email
      user.role.toLowerCase().includes(keyword.toLowerCase()) // Search by phone (optional)
      // user.handledBy.name.toLowerCase().includes(keyword.toLowerCase()) // Search by address (optional)
    );
  }

  showAddUser() {
    this.addUserContainer.clear();
    this.addUserComponentRef =
      this.addUserContainer.createComponent(AddUserComponent);
    this.addUserComponentRef.instance.visible = true;
  }

  showEditUser(user: IUser, index: number) {
    this.editUserContainer.clear(); // Clear previous instances if any

    this.selectedUser = { user, index }; // Assign the selected user

    // Dynamically create and inject the child component
    this.editUserComponentRef =
      this.editUserContainer.createComponent(EditUserComponent);

    // Pass the selected user data to the child component
    this.editUserComponentRef.instance.userData = this.selectedUser.user;
    this.editUserComponentRef.instance.userIndex = this.selectedUser.index;

    // Make the dialog visible
    this.editUserComponentRef.instance.visible = true;
  }

  showViewUser(user: IUser) {
    this.viewUserContainer.clear(); // Clear previous instances if any

    this.selectedUser = user; // Assign the selected user

    // Dynamically create and inject the child component
    this.viewUserComponentRef =
      this.viewUserContainer.createComponent(ViewUserComponent);

    // Pass the selected user data to the child component
    this.viewUserComponentRef.instance.userData = this.selectedUser;

    // Make the dialog visible
    this.viewUserComponentRef.instance.visible = true;
  }

  deleteUser(index: number) {
    this.userService.deleteUser(index).subscribe(() => {
      this.swal.showToast('User Deleted Successfully.', 'success');
    });
  }

}
