import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesOpportunityService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3000/api/sales-opportunity";

  loadKanbanData(){
    return this.http.get(this.apiUrl+'kanban')
  }

  getSalesOpportunities(){
    return this.http.get(this.apiUrl+'/get-sales-opportunities')
  }

}
