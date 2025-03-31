import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

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

  customers: ICustomer [] = [];

  constructor(private customerService: CustomerService){}
  // handleAction(action: string) {
  //   console.log(`${action} clicked`);
  //   // Add logic for navigating to respective pages or opening modals.
  // }

  ngOnInit(){
    this.customerService.getcustomers().subscribe((data:any) => {
      this.customers = data;
    })
  }
}
