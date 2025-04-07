import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskHomeComponent } from './components/task-home/task-home.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskHomeComponent,
    ViewTaskComponent,
    EditTaskComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
