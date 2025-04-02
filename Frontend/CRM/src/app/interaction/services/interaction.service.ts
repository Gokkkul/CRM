import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private apiUrl = "http://localhost:3000/api/interaction";

  constructor(private http: HttpClient) { }

  getInteractions(){
    return this.http.get(this.apiUrl+`/get-interactions`)
  }
}
