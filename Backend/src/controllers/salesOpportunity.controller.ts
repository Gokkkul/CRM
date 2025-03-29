import { Request, Response } from "express";
import { SalesOpportunityService } from "../services/salesOpportunity.service";

const salesOpportunityService = new SalesOpportunityService();

export class SalesOpportunityController {
  /**
   * This method is used to add a new sales opportunity
   * @param req
   * @param res
   * @returns
   */
  addSalesOpportunity = async (req: Request, res: Response) => {
    try {
      const salesOpportunity = req.body;
      const result = await salesOpportunityService.addSalesOpportunity(salesOpportunity);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to update an existing sales opportunity
   * @param req
   * @param res
   * @returns
   */
  updateSalesOpportunity = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const salesOpportunity = req.body;
      const result = await salesOpportunityService.updateSalesOpportunity(id, salesOpportunity);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to delete a sales opportunity
   * @param req
   * @param res
   * @returns
   */
  deleteSalesOpportunity = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const result = await salesOpportunityService.deleteSalesOpportunity(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to get all sales opportunities
   * @param req
   * @param res
   * @returns
   */
  getSalesOpportunities = async (req: Request, res: Response) => {
    try {
      const result = await salesOpportunityService.getSalesOpportunities();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };
}
