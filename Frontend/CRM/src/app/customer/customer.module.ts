import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { HttpClientModule } from '@angular/common/http';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    CustomerHomeComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule
]
})
export class CustomerModule { }
