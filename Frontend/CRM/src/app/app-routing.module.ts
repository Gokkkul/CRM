import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'interactions', loadChildren: () => import('./interaction/interaction.module').then(m => m.InteractionModule) },
  { path: 'leads', loadChildren: () => import('./lead/lead.module').then(m => m.LeadModule) },
  { path: 'email logs', loadChildren: () => import('./email-log/email-log.module').then(m => m.EmailLogModule) },
  { path: 'reports', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
  { path: 'sales opportunity', loadChildren: () => import('./sales-opportunity/sales-opportunity.module').then(m => m.SalesOpportunityModule) },
  { path: 'tasks', loadChildren: () => import('./task/task.module').then(m => m.TaskModule) },
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
