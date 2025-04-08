import { Component, Input } from '@angular/core';
import { ISalesOpportunity } from '../../../models/model';

@Component({
  selector: 'app-view-sales-opportunity',
  standalone: false,
  templateUrl: './view-sales-opportunity.component.html',
  styleUrl: './view-sales-opportunity.component.css'
})
export class ViewSalesOpportunityComponent {
  @Input() salesOpportunityData!: ISalesOpportunity;
  @Input() visible: boolean = false;

  closeDialog() {
    this.visible = false;
  }

  constructor(){
    console.log(this.salesOpportunityData);
    
  }
  
}
