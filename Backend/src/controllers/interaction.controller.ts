import { Request, Response } from "express";
import { interactionService } from "../services/interaction.service";

const interactionSvc = new interactionService();

export class InteractionController {
  /**
   * This method is used to add a new interaction
   * @param req
   * @param res
   * @returns
   */
  addInteraction = async (req: Request, res: Response) => {
    try {
      const interaction = req.body;
      const result = await interactionSvc.addInteraction(interaction);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to update an existing interaction
   * @param req
   * @param res
   * @returns
   */
  updateInteraction = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const interaction = req.body;
      const result = await interactionSvc.updateInteraction(id, interaction);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to delete an interaction
   * @param req
   * @param res
   * @returns
   */
  deleteInteraction = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const result = await interactionSvc.deleteInteraction(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to get all interactions
   * @param req
   * @param res
   * @returns
   */
  getInteractions = async (req: Request, res: Response) => {
    try {
      const result = await interactionSvc.getInteractions();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };
}
