import { Component } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';

export interface IInteraction{
  id: number;
  customer: string;
  handledBy: { name: string };
  type: string;
  date: string;
  notes?: string;
  followUpDate: string;
  createdAt?: string;
}

@Component({
  selector: 'app-interaction-home',
  standalone: false,
  templateUrl: './interaction-home.component.html',
  styleUrl: './interaction-home.component.css'
})
export class InteractionHomeComponent {

  interactions: IInteraction [] = [];

  constructor(private interactionService: InteractionService){}

  ngOnInit(){
    this.interactionService.getInteractions().subscribe((data: any) => {
      console.log('API Response:', data);
      this.interactions = data;
    })
  }

  editInteraction(interactions: any){

  }

  deleteInteraction(id: number){

  }
}
