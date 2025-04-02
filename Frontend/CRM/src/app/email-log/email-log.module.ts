import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailLogRoutingModule } from './email-log-routing.module';
import { EmailLogHomeComponent } from './components/email-log-home/email-log-home.component';
import { SendEmailComponent } from './components/send-email/send-email.component';


@NgModule({
  declarations: [
    EmailLogHomeComponent,
    SendEmailComponent
  ],
  imports: [
    CommonModule,
    EmailLogRoutingModule
  ]
})
export class EmailLogModule { }
