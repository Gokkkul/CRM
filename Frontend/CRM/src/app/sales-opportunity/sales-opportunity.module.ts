import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesOpportunityRoutingModule } from './sales-opportunity-routing.module';
import { SalesOpportunityHomeComponent } from './components/sales-opportunity-home/sales-opportunity-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ViewSalesOpportunityComponent } from './components/view-sales-opportunity/view-sales-opportunity.component';


import  {BaseChartDirective} from 'ng2-charts';
import { AddSalesOpportunityComponent } from './components/add-sales-opportunity/add-sales-opportunity.component';
import { EditSalesOpportunityComponent } from './components/edit-sales-opportunity/edit-sales-opportunity.component'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SalesOpportunityHomeComponent,

    ViewSalesOpportunityComponent,

    AddSalesOpportunityComponent,
    EditSalesOpportunityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SalesOpportunityRoutingModule,
    BaseChartDirective,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SalesOpportunityModule { }
