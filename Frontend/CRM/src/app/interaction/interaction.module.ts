import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionRoutingModule } from './interaction-routing.module';
import { RouterModule } from '@angular/router';
import { InteractionHomeComponent } from './components/interaction-home/interaction-home.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  
    InteractionHomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InteractionRoutingModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class InteractionModule { }
