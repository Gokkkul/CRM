import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

interface total{
  totalCustomer:number;
  totalLeads:number;
  totalSalesOppValue:number
}

@Component({
  selector: 'app-dashboard-home',
  standalone: false,
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {

  totalValue:total | undefined

  constructor(private dashboardService: DashboardService){
    this.dashboardService.getTotalValue().subscribe((data:any)=>{
      this.totalValue = data.result;
      console.log("from dashboard",this.totalValue?.totalCustomer );
      
    })
  }
}
