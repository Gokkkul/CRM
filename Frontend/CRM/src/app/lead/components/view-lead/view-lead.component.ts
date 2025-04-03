import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-lead',
  standalone: false,
  templateUrl: './view-lead.component.html',
  styleUrl: './view-lead.component.css'
})
export class ViewLeadComponent {
  @Input() visible: boolean = false;
  @Input() leadData: any = {};

  closeDialog(): void {
    this.visible = false;
  }
}
