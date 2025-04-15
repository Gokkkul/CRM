import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import {  UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SharedModule } from '../shared/shared.module';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    UserRegistrationComponent,
    UpdateUserComponent,
    UserHomeComponent,
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    LoginComponent,
  ]
})
export class UserModule { }
