import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerHomeComponent } from './components/customer-home/customer-home.component';


@NgModule({
  declarations: [
    CustomerHomeComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
