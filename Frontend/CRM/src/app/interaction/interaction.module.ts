import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionRoutingModule } from './interaction-routing.module';
import { RouterModule } from '@angular/router';
import { InteractionHomeComponent } from './components/interaction-home/interaction-home.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AddInteractionComponent } from './components/add-interaction/add-interaction.component';
import { ViewInteractionComponent } from './components/view-interaction/view-interaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditInteractionComponent } from './components/edit-interaction/edit-interaction.component';



@NgModule({
  declarations: [
  
    InteractionHomeComponent,
        AddInteractionComponent,
        ViewInteractionComponent,
        EditInteractionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InteractionRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class InteractionModule { }
