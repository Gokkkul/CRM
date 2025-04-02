import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';


@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
