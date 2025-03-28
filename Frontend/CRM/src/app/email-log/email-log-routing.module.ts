import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailLogHomeComponent } from './components/email-log-home/email-log-home.component';

const routes: Routes = [
  {path: '', component: EmailLogHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailLogRoutingModule { }
