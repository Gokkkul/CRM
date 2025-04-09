import { EmailLog } from "../entities/emailLog.entity";
import { User } from "../entities/user.entity";
import { emailLogRepository } from "../repositories/emailLog.repository";
import nodemailer from "nodemailer";

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

  async sendAndLogEmail(
    recipient: string,
    emailSubject: string,
    emailBody: string,
    sentBy: User
  ) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gokulgenius24@gmail.com",
        pass: "ugrkbjeyoqqcmzfu",
      },
    });

    const emailData = {
      from: "email@email.com", // Any email id to display
      to: recipient,
      subject: emailSubject,
      text: emailBody,
    };

    try {
      await transporter.sendMail(emailData);

      const logEntry: Partial<EmailLog> = {
        emailSubject: emailSubject,
        emailBody: emailBody,
        recipient: recipient,
        sentBy: sentBy, // Assuming `sentBy` maps to a user entity
        sentAt: new Date(),
      };
      await emailLogRepo.addEmailLog(logEntry);
      return { success: true, message: "Email sent and logged successfully." };
    } catch (error: any) {
      throw new Error(`Email sending failed: ${error.message}`);
    }
  }
}
