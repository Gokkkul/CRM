import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesOpportunityRoutingModule } from './sales-opportunity-routing.module';
import { SalesOpportunityHomeComponent } from './components/sales-opportunity-home/sales-opportunity-home.component';
import { FormsModule } from '@angular/forms';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewSalesOpportunityComponent } from './components/view-sales-opportunity/view-sales-opportunity.component';
import { SalesOpportunityChartComponent } from './components/sales-opportunity-chart/sales-opportunity-chart.component';

import  {BaseChartDirective} from 'ng2-charts'


@NgModule({
  declarations: [
    SalesOpportunityHomeComponent,
    KanbanBoardComponent,
    ViewSalesOpportunityComponent,
    SalesOpportunityChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SalesOpportunityRoutingModule,
    BaseChartDirective
  ]
})
export class SalesOpportunityModule { }
