import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILead } from '../../models/model';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private apiUrl = 'http://localhost:3000/api/lead';

  private leads: ILead[] = [];
  private leadSubject = new BehaviorSubject<ILead[]>(this.leads);
  lead$ = this.leadSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getLeads();
  }

  // Fetch all leads
  getLeads() {
    this.http.get<{ result: ILead[] }>(this.apiUrl + '/get-leads').subscribe((data) => {
      this.leads = data.result;
      this.leadSubject.next(this.leads);
    });
  }

  // Add a new lead
  addLead(data: any) {
    this.leads.push(data); // Update local leads array
    this.leadSubject.next(this.leads); // Emit updated leads
    return this.http.post(this.apiUrl + '/add-lead', data); // Send data to API
  }

  // Update a lead
  updateLead(data: ILead, index: number) {
    this.leads[index].name = data.name;
    this.leads[index].email = data.email;
    this.leads[index].phone = data.phone;
    this.leads[index].status = data.status;
    this.leads[index].assignedTo = data.assignedTo;
    this.leads[index].source = data.source;
    this.leadSubject.next(this.leads); // Emit updated leads

    console.log('This is from LeadService:', this.leads[index]);
    const { id, ...updatedObj } = this.leads[index]; // Destructure to exclude `id`
    return this.http.put(this.apiUrl + `/update-lead/${id}`, updatedObj); // Send updated data to API
  }

  // Delete a lead
  deleteLead(index: number) {
    const { id } = this.leads[index];
    this.leads = this.leads.filter((item) => item.id !== id); // Remove the lead locally
    this.leadSubject.next(this.leads); // Emit updated leads
    console.log('Deleted lead:', id);
    return this.http.delete(this.apiUrl + `/delete-lead/${id}`); // Send delete request to API
  }

  addToCustomer(){
    
  }
}
