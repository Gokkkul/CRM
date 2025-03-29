import { Request, Response } from "express";
import { ReportService } from "../services/report.service";

const reportService = new ReportService();

export class ReportController {
  /**
   * This method is used to add a new report
   * @param req
   * @param res
   * @returns
   */
  addReport = async (req: Request, res: Response) => {
    try {
      const report = req.body;
      const result = await reportService.addReport(report);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to update an existing report
   * @param req
   * @param res
   * @returns
   */
  updateReport = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const report = req.body;
      const result = await reportService.updateReport(id, report);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to delete a report
   * @param req
   * @param res
   * @returns
   */
  deleteReport = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const result = await reportService.deleteReport(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to get all reports
   * @param req
   * @param res
   * @returns
   */
  getReports = async (req: Request, res: Response) => {
    try {
      const result = await reportService.getReports();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };
}
