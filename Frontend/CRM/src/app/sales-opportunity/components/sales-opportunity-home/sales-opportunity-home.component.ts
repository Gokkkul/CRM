import { Component } from '@angular/core';
import { SalesOpportunityService } from '../../services/sales-opportunity.service';

@Component({
  selector: 'app-sales-opportunity-home',
  standalone: false,
  templateUrl: './sales-opportunity-home.component.html',
  styleUrl: './sales-opportunity-home.component.css'
})
export class SalesOpportunityHomeComponent {
  opportunities: any[] = [];
  newOpportunity: any = {}; // for adding a new opportunity
  selectedOpportunity: any = {}; // for updating an opportunity

  constructor() {}

  // ngOnInit(): void {
  //   this.loadOpportunities();
  // }

  // loadOpportunities(): void {
  //   this.salesService.getOpportunities().subscribe((data) => {
  //     this.opportunities = data;
  //   });
  // }

  // addOpportunity(): void {
  //   this.salesService.addOpportunity(this.newOpportunity).subscribe(() => {
  //     this.loadOpportunities();
  //     this.newOpportunity = {};
  //   });
  // }

  // updateOpportunity(): void {
  //   this.salesService
  //     .updateOpportunity(this.selectedOpportunity._id, this.selectedOpportunity)
  //     .subscribe(() => {
  //       this.loadOpportunities();
  //       this.selectedOpportunity = {};
  //     });
  // }

  // deleteOpportunity(id: string): void {
  //   this.salesService.deleteOpportunity(id).subscribe(() => {
  //     this.loadOpportunities();
  //   });
  // }
}

