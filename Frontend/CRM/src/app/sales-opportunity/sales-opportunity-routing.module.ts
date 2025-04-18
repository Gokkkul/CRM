import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesOpportunityHomeComponent } from './components/sales-opportunity-home/sales-opportunity-home.component';
import { ViewSalesOpportunityComponent } from './components/view-sales-opportunity/view-sales-opportunity.component';

const routes: Routes = [
  {path: '', component: SalesOpportunityHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesOpportunityRoutingModule { }
