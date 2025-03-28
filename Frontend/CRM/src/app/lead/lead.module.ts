import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadRoutingModule } from './lead-routing.module';
import { LeadHomeComponent } from './components/lead-home/lead-home.component';


@NgModule({
  declarations: [
    LeadHomeComponent
  ],
  imports: [
    CommonModule,
    LeadRoutingModule
  ]
})
export class LeadModule { }
