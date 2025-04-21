// import { Component } from '@angular/core';
// import { SalesOpportunityService } from '../../../sales-opportunity/services/sales-opportunity.service';

// @Component({
//   selector: 'app-get-sales-opportunities-by-customer',
//   standalone: false,
//   templateUrl: './get-sales-opportunities-by-customer.component.html',
//   styleUrl: './get-sales-opportunities-by-customer.component.css'
// })
// export class GetSalesOpportunitiesByCustomerComponent {
//   data: any;
//   options: any;

//   constructor(private salesOpportunityService: SalesOpportunityService) {}

//   ngOnInit() {
//     this.salesOpportunityService.salesOpportunity$.subscribe((groupedData) => {
//       // console.log("Chart Data:", groupedData);
//       this.data = {
//         labels: groupedData.map(item => item.customer?.name),
//         datasets: [
//           {
//             label: 'Total Sales Value per Customer',
//             data: groupedData.map(item => item.value),
//             backgroundColor: ['#42A5F5', '#FFA726', '#66BB6A', '#AB47BC', '#FF7043'],
//             hoverBackgroundColor: ['#64B5F6', '#FFB74D', '#81C784', '#CE93D8', '#FF8A65']
//           }
//         ]
//       };

//       this.options = {
//         responsive: true,
//         maintainAspectRatio: false
//       };
//     });
//   }
// }


import { Component, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SalesOpportunityService } from '../../../sales-opportunity/services/sales-opportunity.service';

@Component({
  selector: 'app-get-sales-opportunities-by-customer',
  standalone: false,
  templateUrl: './get-sales-opportunities-by-customer.component.html',
  styleUrl: './get-sales-opportunities-by-customer.component.css'
})
export class GetSalesOpportunitiesByCustomerComponent implements AfterViewInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  constructor(private salesOpportunityService: SalesOpportunityService) {}

  ngAfterViewInit() {
    this.salesOpportunityService.salesOpportunity$.subscribe((groupedData) => {
      // Prepare the Highcharts configuration
      this.chartOptions = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Total Sales Value per Customer'
        },
        xAxis: {
          categories: groupedData
            .map(item => item.customer?.name)
            .filter(name => name !== undefined) as string[],
          title: {
            text: 'Customers'
          }
        },
        yAxis: {
          title: {
            text: 'Total Sales Value'
          }
        },
        series: [
          {
            name: 'Sales Value',
            type: 'column',
            data: groupedData.map(item => item.value),
            colorByPoint: true
          }
        ],
        colors: ['#42A5F5', '#FFA726', '#66BB6A', '#AB47BC', '#FF7043'],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                enabled: false
              }
            }
          }]
        }
      };

      // Initialize Highcharts
      Highcharts.chart('container', this.chartOptions);
    });
  }
}
