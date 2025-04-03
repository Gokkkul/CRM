import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadRoutingModule } from './lead-routing.module';
import { LeadHomeComponent } from './components/lead-home/lead-home.component';
import { ViewLeadComponent } from './components/view-lead/view-lead.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LeadHomeComponent,
    ViewLeadComponent
  ],
  imports: [
    CommonModule,
    LeadRoutingModule,
    SharedModule
  ]
})
export class LeadModule { }
