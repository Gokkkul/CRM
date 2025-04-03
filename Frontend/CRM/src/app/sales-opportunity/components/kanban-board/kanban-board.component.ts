import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  standalone: false,
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent {
kanbanData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadKanbanData();
  }

  loadKanbanData(): void {
  //   this.http.get('http://localhost:3000/api/sales-opportunity/kanban').subscribe((data: any) => {
  //     console.log(data); // Check the data structure
  // });
    this.http.get('http://localhost:3000/api/sales-opportunity/kanban').subscribe((data: any) => {
      // this.kanbanData = data.map((stage: any) => ({
        // stage: stage.stage,
        // opportunities: JSON.parse(stage['JSON_ARRAYAGG(opportunity)'])
      // }));

      console.log(data);
      
      
      
    });
  }

  onDragStart(event: DragEvent, opportunity: any): void {
    event.dataTransfer?.setData('opportunity', JSON.stringify(opportunity));
  }

  onDrop(event: DragEvent, stage: string): void {
    const data = event.dataTransfer?.getData('opportunity');
    const opportunity = JSON.parse(data || '{}');
    opportunity.stage = stage;

    this.http.put(`/api/sales-opportunity/${opportunity.id}/stage`, { stage }).subscribe(() => {
      this.loadKanbanData(); // Refresh Kanban data
    });
  }
}
