import { Request, Response } from "express";
import { TaskService } from "../services/task.service";

const taskService = new TaskService();

export class TaskController {
  /**
   * This method is used to add a new task
   * @param req
   * @param res
   * @returns
   */
  addTask = async (req: Request, res: Response) => {
    try {
      const task = req.body;
      const result = await taskService.addTask(task);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to update an existing task
   * @param req
   * @param res
   * @returns
   */
  updateTask = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const task = req.body;
      const result = await taskService.updateTask(id, task);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to delete a task
   * @param req
   * @param res
   * @returns
   */
  deleteTask = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const result = await taskService.deleteTask(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };

  /**
   * This method is used to get all tasks
   * @param req
   * @param res
   * @returns
   */
  getTasks = async (req: Request, res: Response) => {
    try {
      const result = await taskService.getTasks();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(`Message: ${error}`);
    }
  };
}
