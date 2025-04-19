import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/components/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  // { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'customers', canActivate: [AuthGuard], loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'interactions', canActivate: [AuthGuard], loadChildren: () => import('./interaction/interaction.module').then(m => m.InteractionModule) },
  { path: 'leads', canActivate: [AuthGuard], loadChildren: () => import('./lead/lead.module').then(m => m.LeadModule) },
  { path: 'email logs', canActivate: [AuthGuard], loadChildren: () => import('./email-log/email-log.module').then(m => m.EmailLogModule) },
  { path: 'reports', canActivate:  [AdminAuthGuard], loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
  { path: 'sales opportunity', canActivate: [AuthGuard], loadChildren: () => import('./sales-opportunity/sales-opportunity.module').then(m => m.SalesOpportunityModule) },
  // { path: 'tasks',  loadChildren: () => import('./task/task.module').then(m => m.TaskModule) },
  // { path: 'users',  loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'tasks', canActivate: [AuthGuard], loadChildren: () => import('./task/task.module').then(m => m.TaskModule) },
  { path: 'users', canActivate: [AdminAuthGuard], loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
