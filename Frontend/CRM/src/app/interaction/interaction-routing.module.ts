import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionHomeComponent } from './components/interaction-home/interaction-home.component';

const routes: Routes = [
  { path:'', component: InteractionHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionRoutingModule { }
