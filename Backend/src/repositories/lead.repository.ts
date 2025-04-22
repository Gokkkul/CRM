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
    const result = await this.appDataSource.find({
      where: { isDeleted: 0 },
      relations: ["assignedTo"],
    });
    return result;
  }

  async getTotalLeads() {
    const result = await this.appDataSource.count();
    return result;
  }

  async getLeadsCountByStatus() {
    const leads = await this.appDataSource.find({
      where: { isDeleted: 0 }, // Fetch only active leads
    });

    // Group leads by stage
    const groupedData: { [key: string]: number } = {};
    leads.forEach((lead) => {
      groupedData[lead.status] = (groupedData[lead.status] || 0) + 1;
    });

    // Convert object to array format
    return Object.entries(groupedData).map(([status, count]) => ({
      status,
      count,
    }));
  }

// async getLeadsCountByStatus() {
//   try {
//     const result = await this.appDataSource
//       .createQueryBuilder('lead')
//       .select('lead.status', 'status')
//       .addSelect('COUNT(*)', 'count')
//       .where('lead.isDeleted = :isDeleted', { isDeleted: 0 }) // Assuming you need active leads
//       .groupBy('lead.status')
//       .getRawMany(); // Returns raw results

//     return result; // Array of status and count
//   } catch (error) {
//     console.error("Error fetching lead counts:", error);
//     return [];
//   }
// }

  
}
