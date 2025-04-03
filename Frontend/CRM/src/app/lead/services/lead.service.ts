import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private apiUrl = 'http://localhost:3000/api/lead';

  constructor(private http: HttpClient) {}

  getLeads() {
    return this.http.get(this.apiUrl + `/get-leads`);
  }
}
