import { Component } from '@angular/core';
import { LeadService } from '../../../lead/services/lead.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-get-leads-by-status',
  standalone: false,
  templateUrl: './get-leads-by-status.component.html',
  styleUrl: './get-leads-by-status.component.css'
})
export class GetLeadsByStatusComponent {

  Highcharts: typeof Highcharts = Highcharts;
    chartOptions!: Highcharts.Options;
  constructor(private leadService: LeadService){}

  ngOnInit(){
    this.leadService.getLeadsByStatus();
        this.leadService.getLeadsByStatus$.subscribe(
          (leadByStatus) => {
            this.chartOptions = {
              chart: {
                type: 'pie',
              },
              title: {
                text: 'Leads By Status',
              },
              series: [
                {
                  type: 'pie',
                  data: leadByStatus.map((o: any) => ({
                    name: o.status,
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
            Highcharts.chart('leadsByStatus', this.chartOptions)
          },
          (error) => {
            console.error('Failed to fetch data:', error);
          }
        );
  }

}
