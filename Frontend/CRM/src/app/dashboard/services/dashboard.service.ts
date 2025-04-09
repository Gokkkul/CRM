import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {
    // this.getTotalValue()
  }

  private apiUrl = 'http://localhost:3000/api/dashboard';

  getTotalValue() {
    return this.http.get(this.apiUrl + '/getTotalValue');
  }


}
