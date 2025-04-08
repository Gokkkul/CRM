import { AppDataSource } from "../config/data-source";
import { EmailLog } from "../entities/emailLog.entity";

export class emailLogRepository {
    private appDataSource = AppDataSource.getRepository(EmailLog);

    async addEmailLog(emailLog: Partial<EmailLog>) {
        const data = this.appDataSource.create(emailLog);
        await this.appDataSource.save(data);
        return `Email log added successfully...!`;
    }

    async updateEmailLog(id: number, emailLog: Partial<EmailLog>) {
        await this.appDataSource.update(id, emailLog);
        return `Email log updated successfully...!`;
    }

    async deleteEmailLog(id: number) {
        await this.appDataSource.update(id, { isDeleted: 1});
        return `Email log deleted successfully...!`;
    }

    async getEmailLogs() {
        const result = await this.appDataSource.find({where: {isDeleted:0}});
        return result;
    }

    async sendEmail(emailLogData: Partial<EmailLog>){
        const emailLog = await this.appDataSource.create(emailLogData);
        return await this.appDataSource.save(emailLog);
    }
}
