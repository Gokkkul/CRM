import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesOpportunityRoutingModule } from './sales-opportunity-routing.module';
import { SalesOpportunityHomeComponent } from './components/sales-opportunity-home/sales-opportunity-home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SalesOpportunityHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SalesOpportunityRoutingModule
  ]
})
export class SalesOpportunityModule { }
