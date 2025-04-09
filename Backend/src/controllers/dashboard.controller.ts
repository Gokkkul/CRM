import { Request, Response } from "express";
import { DashboardService } from "../services/dashboard.service";

const dashboardService = new DashboardService();

export class DashboardController {
  getTotalValue = async (req: Request, res: Response) => {
    try {
      const result = await dashboardService.getTotalValue();
    //   console.log(result);
      
      res.status(200).json({result:result});
    } catch (error) {
        return `Error: ${error}`
    }
  };
}
