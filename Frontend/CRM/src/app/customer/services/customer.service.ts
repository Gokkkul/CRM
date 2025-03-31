import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = "http://localhost:3000/api/customer";

  constructor(private http: HttpClient) { }

  getcustomers(){
    return this.http.get(this.apiUrl+'/get-customers')
  }
}
