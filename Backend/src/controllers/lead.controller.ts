import { Request, Response } from "express";
import { leadService } from "../services/lead.service";

const leadSvc = new leadService();

export class LeadController {
  /**
   * This method is used to add a new lead
   * @param req
   * @param res
   * @returns
   */
  addLead = async (req: Request, res: Response) => {
    try {
      const lead = req.body;
      const result = await leadSvc.addLead(lead);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to update an existing lead
   * @param req
   * @param res
   * @returns
   */
  updateLead = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const lead = req.body;
      const result = await leadSvc.updateLead(id, lead);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to delete a lead
   * @param req
   * @param res
   * @returns
   */
  deleteLead = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const result = await leadSvc.deleteLead(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to get all leads
   * @param req
   * @param res
   * @returns
   */
  getLeads = async (req: Request, res: Response) => {
    try {
      const result = await leadSvc.getLeads();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };
}
