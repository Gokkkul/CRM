import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesOpportunitiesService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/sales-opportunities';


  getOpportunities(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  addOpportunity(opportunity: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, opportunity);
  }

  updateOpportunity(id: string, opportunity: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, opportunity);
  }

  deleteOpportunity(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
