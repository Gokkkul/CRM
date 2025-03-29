import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionRoutingModule } from './interaction-routing.module';
import { RouterModule } from '@angular/router';
import { InteractionHomeComponent } from './components/interaction-home/interaction-home.component';



@NgModule({
  declarations: [
  
    InteractionHomeComponent,
  ],
  imports: [
    CommonModule,
    InteractionRoutingModule,
    RouterModule
  ]
})
export class InteractionModule { }
