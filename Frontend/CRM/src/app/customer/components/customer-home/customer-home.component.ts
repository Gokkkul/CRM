import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import $ from 'jquery';
import 'datatables.net';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { ViewCustomerComponent } from '../view-customer/view-customer.component';

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
  selectedCustomer: any;


  constructor(private customerService: CustomerService){}

  ngOnInit(){
    this.customerService.getcustomers().subscribe((data:any) => {
      this.customers = data;
      setTimeout(() => {
        $('#example').DataTable();
    }, 1);
    })

  }

//   ngAfterViewInit(): void {
//     setTimeout(() => {
//         $('#example').DataTable();
//     }, 0); // Delay ensures table initializes after data is rendered
// }

  @ViewChild('editCustomer', { read: ViewContainerRef }) editCustomerContainer!: ViewContainerRef;
  private editCustomerComponentRef!: ComponentRef<EditCustomerComponent>;

  @ViewChild('addCustomer', { read: ViewContainerRef }) addCusomerContainer!: ViewContainerRef;
  private addCustomerComponentRef!: ComponentRef<AddCustomerComponent>;

  @ViewChild('viewCustomer', { read: ViewContainerRef }) viewCustomerContainer!: ViewContainerRef;
  private viewCustomerComponentRef!: ComponentRef<ViewCustomerComponent>;

  showEditCustomer(customer: ICustomer) {
    this.editCustomerContainer.clear(); // Clear previous instances if any
  
    this.selectedCustomer = customer; // Assign the selected customer
  
    // Dynamically create and inject the child component
    this.editCustomerComponentRef = this.editCustomerContainer.createComponent(EditCustomerComponent);
  
    // Pass the selected customer data to the child component
    this.editCustomerComponentRef.instance.customerData = this.selectedCustomer; // `@Input()` in EditCustomerComponent
  
    // Make the dialog visible
    this.editCustomerComponentRef.instance.visible = true;
  }

  showAddCustomer(){
    this.addCusomerContainer.clear();
    this.addCustomerComponentRef = this.addCusomerContainer.createComponent(AddCustomerComponent);
    this.addCustomerComponentRef.instance.visible = true;
  }

  showViewCustomer(customer: ICustomer) {
    this.viewCustomerContainer.clear(); // Clear previous instances if any

    this.selectedCustomer = customer; // Assign the selected customer

    // Dynamically create and inject the child component
    this.viewCustomerComponentRef = this.viewCustomerContainer.createComponent(ViewCustomerComponent);

    // Pass the selected customer data to the child component
    this.viewCustomerComponentRef.instance.customerData = this.selectedCustomer;

    // Make the dialog visible
    this.viewCustomerComponentRef.instance.visible = true;
  }
  
}
