// import { Component } from '@angular/core';
// import { SalesOpportunityService } from '../../../sales-opportunity/services/sales-opportunity.service';

// @Component({
//   selector: 'app-get-sales-opportunities-by-stage',
//   standalone: false,
//   templateUrl: './get-sales-opportunities-by-stage.component.html',
//   styleUrl: './get-sales-opportunities-by-stage.component.css',
// })
// export class GetSalesOpportunitiesByStageComponent {
//   data: any;
//   options: any;

//   constructor(private salesOpportunityService: SalesOpportunityService) {}

//   async ngOnInit() {
//     // const opportunitiesByStage = await this.salesOpportunityService.getSalesOpportunitiesByStage();
//     this.salesOpportunityService.salesOpportunity$.subscribe(
//       (opportunitiesByStage) => {
//         this.data = {
//           labels: opportunitiesByStage.map((o) => o.stage),
//           datasets: [
//             {
//               data: opportunitiesByStage.map((o) => o.count),
//               backgroundColor: [
//                 '#42A5F5',
//                 '#66BB6A',
//                 '#FFA726',
//                 '#AB47BC',
//                 '#FF7043',
//               ],
//               hoverBackgroundColor: [
//                 '#64B5F6',
//                 '#81C784',
//                 '#FFB74D',
//                 '#BA68C8',
//                 '#FF8A65',
//               ],
//             },
//           ],
//         };
//         this.options = {
//           responsive: true,
//           plugins: {
//             legend: {
//               position: 'bottom',
//             },
//             tooltip: {
//               enabled: true,
//             },
//           }
//         };
//       },
//       (error) => {
//         console.error('Failed to fetch data:', error);
//       }
//     );
    
//   }
// }


import { Component, OnInit } from '@angular/core';
import { SalesOpportunityService } from '../../../sales-opportunity/services/sales-opportunity.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-get-sales-opportunities-by-stage',
  standalone: false,
  templateUrl: './get-sales-opportunities-by-stage.component.html',
  styleUrls: ['./get-sales-opportunities-by-stage.component.css'],
})
export class GetSalesOpportunitiesByStageComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  constructor(private salesOpportunityService: SalesOpportunityService) {}

  ngOnInit() {
    this.salesOpportunityService.getSalesOpportunitiesByStage();
    this.salesOpportunityService.salesOpportunityByStage$.subscribe(
      (opportunitiesByStage) => {
        this.chartOptions = {
          chart: {
            type: 'pie',
          },
          title: {
            text: 'Sales Opportunities by Stage',
          },
          series: [
            {
              type: 'pie',
              data: opportunitiesByStage.map((o: any) => ({
                name: o.stage,
                y: o.count,
              })),
              colors: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#FF7043'],
            },
          ],
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.y}',
              },
            },
          },
        };
        Highcharts.chart('salesOpportunityByStage', this.chartOptions)
      },
      (error) => {
        console.error('Failed to fetch data:', error);
      }
    );
  }
}
