import { SalesOpportunity } from "../entities/salesOpportunity.entity";
import { SalesOpportunityRepository } from "../repositories/salesOpportunity.repository";

const salesOpportunityRepo = new SalesOpportunityRepository();

export class SalesOpportunityService {
    async addSalesOpportunity(salesOpportunity: Partial<SalesOpportunity>) {
        try {
            const result = await salesOpportunityRepo.addSalesOpportunity(salesOpportunity);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async updateSalesOpportunity(id: number, salesOpportunity: Partial<SalesOpportunity>) {
        try {
            const result = await salesOpportunityRepo.updateSalesOpportunity(id, salesOpportunity);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async deleteSalesOpportunity(id: number) {
        try {
            const result = await salesOpportunityRepo.deleteSalesOpportunity(id);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async getSalesOpportunities() {
        try {
            const result = await salesOpportunityRepo.getSalesOpportunities();
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    // async getOpportunitiesByStage(){
    //     try {
    //         const result = await salesOpportunityRepo.getOpportunitiesByStage();
    //         return result;
    //     } catch (error) {
    //         return `Error: ${error}`;
    //     }
    // }

    async getSummaryData() {
        try {
            const result = await salesOpportunityRepo.getSummaryData();
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async getOpportunityById(id: number) {
        try {
            const result = await salesOpportunityRepo.getOpportunityById(id);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async getSalesOpportunitiesByCustomer() {
        return await salesOpportunityRepo.getSalesOpportunitiesByCustomer();
    }

    async getOpportunitiesByStage(){
        return await salesOpportunityRepo.getOpportunitiesByStage();
    }
}
