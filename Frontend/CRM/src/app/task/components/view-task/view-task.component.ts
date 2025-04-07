import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-task',
  standalone: false,
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.css'
})
export class ViewTaskComponent {
  @Input() visible: boolean = false; // Controls the visibility of the dialog
  @Input() taskData: any; // Holds the task data to display

  closeDialog() {
    this.visible = false; // Hides the dialog
  }
}
