  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { ICustomer } from '../components/customer-home/customer-home.component';
  import { BehaviorSubject } from 'rxjs';
import { event } from 'jquery';
import { SweetAlertService } from '../../shared/services/sweet-alert.service';

  @Injectable({
    providedIn: 'root',
  })
  export class CustomerService {
    private apiUrl = 'http://localhost:3000/api/customer';

    private customers: ICustomer[] = [];
    private customerSubject = new BehaviorSubject<ICustomer[]>(this.customers);
    customer$ = this.customerSubject.asObservable();

    constructor(private http: HttpClient, private swal: SweetAlertService) {
      this.getcustomers();
    }

    getcustomers() {
      this.http.get<{
        result:ICustomer[]
      }>(this.apiUrl + '/get-customers').subscribe((data) => {
        this.customers = data.result;
        
        this.customerSubject.next(this.customers);
        
      });
    }

    // updateCustomer(){
    //   const id = 1;
    //   return this.http.put(this.apiUrl+`/update-customer/`)
    // }

    addCustomer(data: any) {
      this.customers.push(data);
      this.customerSubject.next(this.customers);
      return this.http.post(this.apiUrl + `/add-customer`, data);
    }

    updateCustomer(data: ICustomer, index: number) {

      this.customers[index].address = data.address;
      this.customers[index].email = data.email;
      this.customers[index].name = data.name;
      this.customers[index].phone = data.phone;
      this.customerSubject.next(this.customers);

      

      console.log("This is from customer service:",this.customers[index]);
      const { id, ...updatedObj } = this.customers[index];
      return this.http.put(this.apiUrl + `/update-customer/${id}`,updatedObj);
    }

    deleteCustomer(index: number){
      const { id } = this.customers[index];
      this.customers = this.customers.filter(item => item.id != id);
      console.log(this.customers[index]);
      this.customerSubject.next(this.customers);
    return this.http.delete(this.apiUrl + `/delete-customer/${id}`);
    }


  addLeadToCustomer(){
    this.http.post(this.apiUrl+`/add-lead-to-customer`,'').subscribe({
      next: (res) => {
        this.getcustomers()
        this.swal.showToast('Lead Added to Customer...!', 'success')
      },

      error: (err) => {
        this.swal.showToast('Failed to Add Lead to Customer', 'error')
      }
    })
  } 
    
  }
