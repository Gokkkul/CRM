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
    this.userService.user$.subscribe((data: any) => {
      this.users = data;
    });
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
