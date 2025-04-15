import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-interaction',
  standalone: false,
  templateUrl: './view-interaction.component.html',
  styleUrl: './view-interaction.component.css'
})
export class ViewInteractionComponent {
  @Input() interactionData!: any; // Receives selected interaction data
  @Input() visible: boolean = false; // Controls visibility of the dialog

  closeDialog(): void {
    this.visible = false;
  }

  ngOnInit(){
    console.log(this.interactionData)
  }
}
