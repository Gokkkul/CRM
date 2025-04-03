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

    // Fetch grouped opportunities for Kanban board
    async getOpportunitiesByStage() {
<<<<<<< HEAD
        const queryRunner = AppDataSource.createQueryRunner(); // Create a query runner
        try {
            return await queryRunner.query(`
                WITH OpportunitiesJSON AS (
                    SELECT 
                        stage,
                        (SELECT id, value, expectedCloseDate, notes
                         FROM [sales__opportunity__tbl] sub_opportunity
                         WHERE sub_opportunity.stage = main.stage
                         FOR JSON PATH) AS opportunityJson
                    FROM [sales__opportunity__tbl] main
                )
                SELECT stage, STRING_AGG(opportunityJson, ',') AS opportunities
                FROM OpportunitiesJSON
                GROUP BY stage;
            `);
        } finally {
            await queryRunner.release(); // Release the query runner after use
        }
=======
        return this.appDataSource.createQueryBuilder('opportunity')
            .select('opportunity.stage')
            .addSelect('JSON_ARRAYAGG(opportunity) AS opportunities')
            .groupBy('opportunity.stage')
            .getRawMany();
>>>>>>> 37485794123385f62f98ab3761b9b4f9babee936
    }

   

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
}
