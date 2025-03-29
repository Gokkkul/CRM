import { Report } from "../entities/report.entity";
import { ReportRepository } from "../repositories/report.repository";

const reportRepo = new ReportRepository();

export class ReportService {
    async addReport(report: Partial<Report>) {
        try {
            const result = await reportRepo.addReport(report);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async updateReport(id: number, report: Partial<Report>) {
        try {
            const result = await reportRepo.updateReport(id, report);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async deleteReport(id: number) {
        try {
            const result = await reportRepo.deleteReport(id);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async getReports() {
        try {
            const result = await reportRepo.getReports();
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }
}
