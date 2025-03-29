import { Request, Response } from "express";
import { customerService } from "../services/customer.service";

const custService = new customerService();

export class CustomerController {
  /**
   * This method is used to add a new customer
   * @param req
   * @param res
   * @returns
   */
  addCustomer = async (req: Request, res: Response) => {
    try {
      const customer = req.body;
      const result = await custService.addCustomer(customer);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to update an existing customer
   * @param req
   * @param res
   * @returns
   */
  updateCustomer = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const customer = req.body;
      const result = await custService.updateCustomer(id, customer);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to delete a customer
   * @param req
   * @param res
   * @returns
   */
  deleteCustomer = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const result = await custService.deleteCustomer(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to get all customers
   * @param req
   * @param res
   * @returns
   */
  getCustomers = async (req: Request, res: Response) => {
    try {
      const result = await custService.getCustomer();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };
}
