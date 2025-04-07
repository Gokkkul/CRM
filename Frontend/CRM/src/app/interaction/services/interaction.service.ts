import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IInteraction } from '../components/interaction-home/interaction-home.component';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private apiUrl = 'http://localhost:3000/api/interaction'; 
  private interactions: IInteraction[] = [];
  private interactionSubject = new BehaviorSubject<any[]>(this.interactions);
  interaction$ = this.interactionSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getInteractions();
  }

  // Fetch all interactions
  getInteractions() {
    this.http
      .get<{ result: IInteraction[] }>(this.apiUrl + '/get-interactions')
      .subscribe((data) => {
        console.log(data.result);
        
        this.interactions = data.result; 
        this.interactionSubject.next(this.interactions);

        
      });
  }

  // Add a new interaction
  addInteraction(data: any) {
    this.interactions.push(data);
    this.interactionSubject.next(this.interactions);
    return this.http.post(this.apiUrl + '/add-interaction', data);
  }

  // Update an existing interaction
  updateInteraction(data: any, index: number) {
    this.interactions[index] = { ...this.interactions[index], ...data };
    this.interactionSubject.next(this.interactions);

    console.log('Updated interaction:', this.interactions[index]);
    const { id, ...updatedObj } = this.interactions[index];
    return this.http.put(this.apiUrl + `/update-interaction/${id}`, updatedObj);
  }

  // Delete an interaction
  deleteInteraction(index: number) {
    const { id } = this.interactions[index];
    this.interactions = this.interactions.filter((item) => item.id !== id);
    this.interactionSubject.next(this.interactions);
    return this.http.delete(this.apiUrl + `/delete-interaction/${id}`);
  }
}
