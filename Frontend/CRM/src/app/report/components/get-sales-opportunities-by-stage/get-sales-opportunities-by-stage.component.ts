import { Component } from '@angular/core';
import { SalesOpportunityService } from '../../../sales-opportunity/services/sales-opportunity.service';

@Component({
  selector: 'app-get-sales-opportunities-by-stage',
  standalone: false,
  templateUrl: './get-sales-opportunities-by-stage.component.html',
  styleUrl: './get-sales-opportunities-by-stage.component.css'
})
export class GetSalesOpportunitiesByStageComponent {
  data: any;
  options: any;

  constructor(private salesOpportunityService: SalesOpportunityService) {}

  async ngOnInit() {
    // const opportunitiesByStage = await this.salesOpportunityService.getSalesOpportunitiesByStage();
this.salesOpportunityService.salesOpportunity$.subscribe((opportunitiesByStage) => {
  this.data = {
    labels: opportunitiesByStage.map(o => o.stage), // Stages as labels
    datasets: [
      {
        data: opportunitiesByStage.map(o => o.count), // Counts as data points
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#FF7043'], // Custom colors
        hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D', '#BA68C8', '#FF8A65']
      }
    ]
  };

  this.options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        enabled: true
      }
    }
  };
})
    
  }
}
