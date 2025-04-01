import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';

export interface ICustomer{
  id: number;
  name: string;
  email: string;
  phone?: string; 
  address?: string;
  company?: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-customer-home',
  standalone: false,
  templateUrl: './customer-home.component.html',
  styleUrl: './customer-home.component.css'
})
export class CustomerHomeComponent implements OnInit{

  visible = false;

  customers: ICustomer [] = [];


  constructor(private customerService: CustomerService){}

  ngOnInit(){
    this.customerService.getcustomers().subscribe((data:any) => {
      this.customers = data;
    })

  }

  @ViewChild('editCustomer', { read: ViewContainerRef }) container!: ViewContainerRef;
  private componentRef!: ComponentRef<EditCustomerComponent>;

  showEditCustomer() {
    this.container.clear(); // Remove previous instances if any

    // Dynamically create and inject the child component
    this.componentRef = this.container.createComponent(EditCustomerComponent);
    
    // Pass data to the child component (if needed)
    this.componentRef.instance.visible = true;
  }
}
