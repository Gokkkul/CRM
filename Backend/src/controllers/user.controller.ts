import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";

const userService = new UserService();
const authService = new AuthService();

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
      const result = await authService.registerUser(user);
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
  * 
  * @param req 
  * @param res 
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
      res.status(200).json({result});
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };
}
