import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-user',
  standalone: false,
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent {
  @Input() visible: boolean = false; // Controls the visibility of the dialog
  @Input() userData: any; // Holds the user data to display

  closeDialog() {
    this.visible = false; // Hides the dialog
  }
  
}
