import { Component } from '@angular/core';
import { SalesOpportunityService } from '../../services/sales-opportunity.service';
import { Chart, LinearScale, CategoryScale, registerables } from 'chart.js';

Chart.register(LinearScale, CategoryScale, ...registerables);


@Component({
  selector: 'app-sales-opportunity-chart',
  standalone: false,
  templateUrl: './sales-opportunity-chart.component.html',
  styleUrl: './sales-opportunity-chart.component.css'
})
export class SalesOpportunityChartComponent {
  ngOnInit(): void {
    this.salesOpportunityService.getSalesOpportunities().subscribe((data: any) => {
      const filteredData = data.filter((opportunity: any) => !opportunity.isDeleted);
      const groupedData: any = {};
  
      filteredData.forEach((opportunity: any) => {
        if (!groupedData[opportunity.stage]) {
          groupedData[opportunity.stage] = 0;
        }
        groupedData[opportunity.stage] += opportunity.value;
      });
  
      this.chartData.labels = Object.keys(groupedData);
      this.chartData.datasets[0].data = Object.values(groupedData);
      this.chartData.datasets[0].backgroundColor = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ];
    });
  }
  chartData: any = {
    labels: [],
    datasets: [
      {
        label: 'Sales Opportunity Values',
        data: [],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  chartOptions: any = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  constructor(private salesOpportunityService: SalesOpportunityService) {}

  // ngOnInit(): void {
  //   this.salesOpportunityService.getSalesOpportunities().subscribe((data: any) => {
  //     // Prepare chart labels and data from the API response
  //     this.chartData.labels = data.map((opportunity: any) => opportunity.stage);
  //     this.chartData.datasets[0].data = data.map((opportunity: any) => opportunity.value);
  //   });
  // }
}
