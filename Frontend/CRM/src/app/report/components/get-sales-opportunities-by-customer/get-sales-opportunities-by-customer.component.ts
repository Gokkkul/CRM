import { Component } from '@angular/core';
import { SalesOpportunityService } from '../../../sales-opportunity/services/sales-opportunity.service';

@Component({
  selector: 'app-get-sales-opportunities-by-customer',
  standalone: false,
  templateUrl: './get-sales-opportunities-by-customer.component.html',
  styleUrl: './get-sales-opportunities-by-customer.component.css'
})
export class GetSalesOpportunitiesByCustomerComponent {
  data: any;
  options: any;

  constructor(private salesOpportunityService: SalesOpportunityService) {}

  ngOnInit() {
    this.salesOpportunityService.salesOpportunity$.subscribe((groupedData) => {
      // console.log("Chart Data:", groupedData);
      this.data = {
        labels: groupedData.map(item => item.customer?.name),
        datasets: [
          {
            label: 'Total Sales Value per Customer',
            data: groupedData.map(item => item.value),
            backgroundColor: ['#42A5F5', '#FFA726', '#66BB6A', '#AB47BC', '#FF7043'],
            hoverBackgroundColor: ['#64B5F6', '#FFB74D', '#81C784', '#CE93D8', '#FF8A65']
          }
        ]
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false
      };
    });
  }
}
