import { AppDataSource } from "../config/data-source";
import { CustomerRepository } from "../repositories/customer.repository";
import { leadRepository } from "../repositories/lead.repository";
import { SalesOpportunityRepository } from "../repositories/salesOpportunity.repository";

export class DashboardService {
  private customerRepo = new CustomerRepository();
  private leadRepo = new leadRepository();
  private salesOppRepo = new SalesOpportunityRepository();

  async getTotalValue() {
    try {
      const totalCustomer = await this.customerRepo.getTotalCustomers();
      const totalLeads = await this.leadRepo.getTotalLeads();
      const totalSalesOppValue = await this.salesOppRepo.getTotalSalesValue();
    //   console.log(totalCustomer, totalCustomer, totalSalesOppValue);
      
      return {totalCustomer, totalLeads, totalSalesOppValue}
    } catch (error) {
        return `Error: ${error}`
    }
  }
}
