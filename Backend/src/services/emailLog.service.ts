import { EmailLog } from "../entities/emailLog.entity";
import { emailLogRepository } from "../repositories/emailLog.repository";
import nodemailer from 'nodemailer';

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

    // async sendAndLogEmail(recipient: string, subject: string, message: string, sentBy: number){
    //     const transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //             user: 'email@email.com',
    //             pass: 'password'
    //         },
    //     });

    //     const emailData = {
    //         from: 'email@email.com',
    //         to: recipient,
    //         subject: subject,
    //         text: message,
    //     };

    //     try {
    //         await transporter.sendMail(emailData);

    //         const logEntry: Partial<EmailLog> = {
    //             emailSubject: subject,
    //             emailBody: message,
    //             recipient: recipient,
    //             sentBy: { id: sendBy }, // Assuming `sentBy` maps to a user entity
    //             sentAt: new Date(),
    //         }
    //     } catch (error) {
    //         await addEmailLog(logEntry);
    //         return { success: true, message: "Email sent and logged successfully." };
    //       } catch (error: any) {
    //         throw new Error(`Email sending failed: ${error.message}`);
    //       }
    //     }

    }

