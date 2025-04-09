import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailLogRoutingModule } from './email-log-routing.module';
import { EmailLogHomeComponent } from './components/email-log-home/email-log-home.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { ViewEmailComponent } from './components/view-email/view-email.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmailLogHomeComponent,
    SendEmailComponent,
    ViewEmailComponent
  ],
  imports: [
    CommonModule,
    EmailLogRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmailLogModule { }
