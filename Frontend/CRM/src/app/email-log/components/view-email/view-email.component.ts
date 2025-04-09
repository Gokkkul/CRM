import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-email',
  standalone: false,
  templateUrl: './view-email.component.html',
  styleUrl: './view-email.component.css'
})
export class ViewEmailComponent {
  @Input() emailLogData: any;
  @Input() visible: boolean = false;

  // Method to close the dialog
  closeDialog() {
    this.visible = false;
  }
}
