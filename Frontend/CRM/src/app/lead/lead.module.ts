import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadRoutingModule } from './lead-routing.module';
import { LeadHomeComponent } from './components/lead-home/lead-home.component';
import { ViewLeadComponent } from './components/view-lead/view-lead.component';
import { SharedModule } from '../shared/shared.module';
import { AddLeadComponent } from './components/add-lead/add-lead.component';
import { EditLeadComponent } from './components/edit-lead/edit-lead.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LeadHomeComponent,
    ViewLeadComponent,
    AddLeadComponent,
    EditLeadComponent
  ],
  imports: [
    CommonModule,
    LeadRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LeadModule { }
