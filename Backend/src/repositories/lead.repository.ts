import { AppDataSource } from "../config/data-source";
import { Lead } from "../entities/lead.entity";

export class leadRepository {
    private appDataSource = AppDataSource.getRepository(Lead);

    async addLead(lead: Partial<Lead>) {
        const data = this.appDataSource.create(lead);
        await this.appDataSource.save(data);
        return `Lead added successfully...!`;
    }

    async updateLead(id: number, lead: Partial<Lead>) {
        await this.appDataSource.update(id, lead);
        return `Lead updated successfully...!`;
    }

    async deleteLead(id: number) {
        await this.appDataSource.update(id, { isDeleted: 1 });
        return `Lead deleted successfully...!`;
    }

    async getLeads() {
        const result = await this.appDataSource.find({where: {isDeleted: 0}});
        return result;
    }

    async getTotalLeads(){
        const result = await this.appDataSource.count();
        return result;
    }
}
