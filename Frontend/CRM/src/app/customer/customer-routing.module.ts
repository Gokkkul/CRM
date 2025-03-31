import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';


const routes: Routes = [
  {path: '', component: CustomerHomeComponent},
  {path: 'edit-customer/:id', component: EditCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
