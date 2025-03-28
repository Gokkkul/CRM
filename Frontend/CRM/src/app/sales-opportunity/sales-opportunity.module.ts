import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesOpportunityRoutingModule } from './sales-opportunity-routing.module';
import { SalesOpportunityHomeComponent } from './components/sales-opportunity-home/sales-opportunity-home.component';


@NgModule({
  declarations: [
    SalesOpportunityHomeComponent
  ],
  imports: [
    CommonModule,
    SalesOpportunityRoutingModule
  ]
})
export class SalesOpportunityModule { }
