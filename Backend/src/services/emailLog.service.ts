import { EmailLog } from "../entities/emailLog.entity";
import { emailLogRepository } from "../repositories/emailLog.repository";

const emailLogRepo = new emailLogRepository();

export class emailLogService {
    async addEmailLog(emailLog: Partial<EmailLog>) {
        try {
            const result = await emailLogRepo.addEmailLog(emailLog);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async updateEmailLog(id: number, emailLog: Partial<EmailLog>) {
        try {
            const result = await emailLogRepo.updateEmailLog(id, emailLog);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async deleteEmailLog(id: number) {
        try {
            const result = await emailLogRepo.deleteEmailLog(id);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async getEmailLogs() {
        try {
            const result = await emailLogRepo.getEmailLogs();
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }
}
