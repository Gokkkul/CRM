import { AppDataSource } from "../config/data-source";
import { Report } from "../entities/report.entity";

export class ReportRepository {
    private appDataSource = AppDataSource.getRepository(Report);

    async addReport(report: Partial<Report>) {
        const data = this.appDataSource.create(report);
        await this.appDataSource.save(data);
        return `Report added successfully...!`;
    }

    async updateReport(id: number, report: Partial<Report>) {
        await this.appDataSource.update(id, report);
        return `Report updated successfully...!`;
    }

    async deleteReport(id: number) {
        await this.appDataSource.update(id, { isDeleted: 1 });
        return `Report deleted successfully...!`;
    }

    async getReports() {
        const result = await this.appDataSource.find();
        return result;
    }
}
