import { Request, Response } from "express";
import { emailLogService } from "../services/emailLog.service";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";

const emailService = new emailLogService();
const userService = new UserService()

export class EmailLogController {
  /**
   * This method is used to add a new email log
   * @param req
   * @param res
   * @returns
   */
  addEmailLog = async (req: Request, res: Response) => {
    try {
      const emailLog = req.body;
      const result = await emailService.addEmailLog(emailLog);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to update an existing email log
   * @param req
   * @param res
   * @returns
   */
  updateEmailLog = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const emailLog = req.body;
      const result = await emailService.updateEmailLog(id, emailLog);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to delete an email log
   * @param req
   * @param res
   * @returns
   */
  deleteEmailLog = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const result = await emailService.deleteEmailLog(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to get all email logs
   * @param req
   * @param res
   * @returns
   */
  getEmailLogs = async (req: Request, res: Response) => {
    try {
      const result = await emailService.getEmailLogs();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

   sendEmailController = async (req: Request, res: Response): Promise<void> => {
    const { recipient, emailSubject, emailBody, userId } = req.body;
  
    try {
      const user = await userService.getUserById(userId) as User
      const result = await emailService.sendAndLogEmail(recipient, emailSubject, emailBody, user);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

}
