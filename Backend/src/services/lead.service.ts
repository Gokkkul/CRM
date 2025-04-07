import { Lead } from "../entities/lead.entity";
import { leadRepository } from "../repositories/lead.repository";

const leadRepo = new leadRepository();

export class leadService {
    async addLead(lead: Partial<Lead>) {
        try {
            const result = await leadRepo.addLead(lead);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async updateLead(id: number, lead: Partial<Lead>) {
        try {
            const result = await leadRepo.updateLead(id, lead);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async deleteLead(id: number) {
        try {
            const result = await leadRepo.deleteLead(id);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async getLeads() {
        try {
            const result = await leadRepo.getLeads();
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }
    
}
