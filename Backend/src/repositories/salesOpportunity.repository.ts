import { AppDataSource } from "../config/data-source";
import { SalesOpportunity } from "../entities/salesOpportunity.entity";

export class SalesOpportunityRepository {
    private appDataSource = AppDataSource.getRepository(SalesOpportunity);

    async addSalesOpportunity(salesOpportunity: Partial<SalesOpportunity>) {
        const data = this.appDataSource.create(salesOpportunity);
        await this.appDataSource.save(data);
        return `Sales Opportunity added successfully...!`;
    }

    async updateSalesOpportunity(id: number, salesOpportunity: Partial<SalesOpportunity>) {
        await this.appDataSource.update(id, salesOpportunity);
        return `Sales Opportunity updated successfully...!`;
    }

    async deleteSalesOpportunity(id: number) {
        await this.appDataSource.update(id, { isDeleted: 1 });
        return `Sales Opportunity deleted successfully...!`;
    }

    async getSalesOpportunities() {
        const result = await this.appDataSource.find();
        return result;
    }
}
