import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
  /**
   * This method is used to add a new user
   * @param req
   * @param res
   * @returns
   */
  addUser = async (req: Request, res: Response) => {
    try {
      const user = req.body;
      const result = await userService.addUser(user);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to update an existing user
   * @param req
   * @param res
   * @returns
   */
  updateUser = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const user = req.body;
      const result = await userService.updateUser(id, user);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to delete a user
   * @param req
   * @param res
   * @returns
   */
  deleteUser = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const result = await userService.deleteUser(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };


  /**
   * This method is used to get all users
   * @param req
   * @param res
   * @returns
   */
  getUsers = async (req: Request, res: Response) => {
    try {
      const result = await userService.getUsers();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };
}
