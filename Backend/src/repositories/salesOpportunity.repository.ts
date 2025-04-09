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
        const result = await this.appDataSource.find({relations: ['customer'], where:{isDeleted:0}});
        return result;
    }

    // Fetch grouped opportunities for Kanban board
    // async getOpportunitiesByStage() {
    //     const queryRunner = AppDataSource.createQueryRunner(); // Create a query runner
    //     try {
    //         return await queryRunner.query(`
    //             WITH OpportunitiesJSON AS (
    //                 SELECT 
    //                     stage,
    //                     (SELECT id, value, expectedCloseDate, notes
    //                      FROM [sales__opportunity__tbl] sub_opportunity
    //                      WHERE sub_opportunity.stage = main.stage
    //                      FOR JSON PATH) AS opportunityJson
    //                 FROM [sales__opportunity__tbl] main
    //             )
    //             SELECT stage, STRING_AGG(opportunityJson, ',') AS opportunities
    //             FROM OpportunitiesJSON
    //             GROUP BY stage;
    //         `);
    //     } finally {
    //         await queryRunner.release(); // Release the query runner after use
    //     }
    // }

   

    // Fetch summary data
    async getSummaryData() {
        return this.appDataSource.createQueryBuilder('opportunity')
            .select('opportunity.stage')
            .addSelect('COUNT(*) AS count')
            .addSelect('SUM(opportunity.value) AS totalValue')
            .groupBy('opportunity.stage')
            .getRawMany();
    }

    // Fetch Opportunities by id
    async getOpportunityById(id: number) {
        return this.appDataSource.findOne({ where: { id } });
    }

    async getSalesOpportunitiesByCustomer() {
        const opportunities = await this.appDataSource.find({ 
            relations: ["customer"],
            where: { isDeleted: 0 } // Fetch only active opportunities
        });

        // Group & aggregate sales values by customer
        const groupedData: { [key: string]: number } = {};
        opportunities.forEach(opportunity => {
            const customerName = opportunity.customer?.name || "Unknown";
            groupedData[customerName] = (groupedData[customerName] || 0) + opportunity.value;
        });

        // Convert object to array format
        return Object.entries(groupedData).map(([customer, totalValue]) => ({ customer, totalValue }));
    }

    async getOpportunitiesByStage() {
        const opportunities = await this.appDataSource.find({
            where: { isDeleted: 0 }, // Fetch only active opportunities
        });

        // Group opportunities by stage
        const groupedData: { [key: string]: number } = {};
        opportunities.forEach(opportunity => {
            groupedData[opportunity.stage] = (groupedData[opportunity.stage] || 0) + 1;
        });

        // Convert object to array format
        return Object.entries(groupedData).map(([stage, count]) => ({ stage, count }));
    }

    async getTotalSalesValue() {
        const totalValue = await this.appDataSource
          .createQueryBuilder("salesOpportunity")
          .select("SUM(salesOpportunity.value)", "totalValue")
          .where("salesOpportunity.isDeleted = :isDeleted", { isDeleted: 0 }) // Optional filter for non-deleted records
          .getRawOne();
      
        // console.log("Total Sales Value:", totalValue.totalValue);
        return totalValue.totalValue;
      }
}
