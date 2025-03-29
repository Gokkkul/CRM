import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailLogRoutingModule } from './email-log-routing.module';
import { EmailLogHomeComponent } from './components/email-log-home/email-log-home.component';


@NgModule({
  declarations: [
    EmailLogHomeComponent
  ],
  imports: [
    CommonModule,
    EmailLogRoutingModule
  ]
})
export class EmailLogModule { }
