import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISalesOpportunity } from '../../models/model';
import { BehaviorSubject } from 'rxjs';
import { SweetAlertService } from '../../shared/services/sweet-alert.service';

@Injectable({
  providedIn: 'root'
})
export class SalesOpportunityService {

  private apiUrl = 'http://localhost:3000/api/sales-opportunity';

  private salesOpportunities: ISalesOpportunity[] = [];
  private salesOpportunitySubject = new BehaviorSubject<ISalesOpportunity[]>(this.salesOpportunities);
  salesOpportunity$ = this.salesOpportunitySubject.asObservable();

  constructor(private http: HttpClient, private swal: SweetAlertService) {
    this.getSalesOpportunities();
  }
  getSalesOpportunities() {
    this.http.get(this.apiUrl+"/get-sales-opportunities").subscribe((data:any) => {
      this.salesOpportunities = data;
      this.salesOpportunitySubject.next(this.salesOpportunities);
    });
  }

  addSalesOpportunity(data: any) {
    this.salesOpportunities.push(data);
    this.salesOpportunitySubject.next(this.salesOpportunities);
    return this.http.post(this.apiUrl + `/add-sales-opportunity`, data);
  }

  updateSalesOpportunity(data: ISalesOpportunity, index: number) {
    this.salesOpportunities[index].stage = data.stage;
    this.salesOpportunities[index].value = data.value;
    this.salesOpportunities[index].expectedCloseDate = data.expectedCloseDate;
    this.salesOpportunities[index].notes = data.notes;
    this.salesOpportunitySubject.next(this.salesOpportunities);

    console.log("Updating Sales Opportunity:", this.salesOpportunities[index]);
    const { id, ...updatedObj } = this.salesOpportunities[index];
    return this.http.put(this.apiUrl + `/update-sales-opportunity/${id}`, updatedObj);
  }

  deleteSalesOpportunity(index: number) {
    const { id } = this.salesOpportunities[index];
    this.salesOpportunities = this.salesOpportunities.filter(item => item.id !== id);
    this.salesOpportunitySubject.next(this.salesOpportunities);

    return this.http.delete(this.apiUrl + `/delete-sales-opportunity/${id}`).subscribe(() => {
      console.log("Deleted Sales Opportunity");
      this.swal.showToast('Sales Opportunity Deleted Successfully.', 'success');
    });
  }

  addLeadToSalesOpportunity() {
    this.http.post(this.apiUrl + `/add-lead-to-sales-opportunity`, '').subscribe({
      next: () => {
        this.getSalesOpportunities();
        this.swal.showToast('Lead Added to Sales Opportunity...!', 'success');
      },
      error: () => {
        this.swal.showToast('Failed to Add Lead to Sales Opportunity', 'error');
      }
    });
  }

  getSalesOpportunitiesByCustomer(){
    return this.http.get(this.apiUrl + `/get-sales-opportunities-by-customers`).subscribe()
  }

  getSalesOpportunitiesByStage(){
    return this.http.get(this.apiUrl+`/get-sales-opportunities-by-stage`)
  }

}
