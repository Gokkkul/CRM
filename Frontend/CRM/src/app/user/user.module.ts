import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserHomeComponent } from './components/user-home/user-home.component';


@NgModule({
  declarations: [
    LoginComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    AddUserComponent
  ]
})
export class UserModule { }
