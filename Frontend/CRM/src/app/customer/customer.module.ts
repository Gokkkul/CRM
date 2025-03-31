import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { HttpClientModule } from '@angular/common/http';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerHomeComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
