import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportHomeComponent } from './components/report-home/report-home.component';
import { SharedModule } from '../shared/shared.module';
import { GetSalesOpportunitiesByCustomerComponent } from './components/get-sales-opportunities-by-customer/get-sales-opportunities-by-customer.component';
import { GetSalesOpportunitiesByStageComponent } from './components/get-sales-opportunities-by-stage/get-sales-opportunities-by-stage.component';



@NgModule({
  declarations: [
    ReportHomeComponent,
    GetSalesOpportunitiesByCustomerComponent,
    GetSalesOpportunitiesByStageComponent,
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule
  ]
})
export class ReportModule { }
