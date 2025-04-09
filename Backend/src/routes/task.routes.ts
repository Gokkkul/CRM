import { TaskController } from "../controllers/task.controller";

const express = require("express");

const router = express.Router();
const taskController = new TaskController();

router.post('/add-task', taskController.addTask);
router.delete('/delete-task/:id', taskController.deleteTask);
router.put('/update-task/:id', taskController.updateTask);
router.get('/get-tasks', taskController.getTasks);
router.get('/get-tasks/:id', taskController.getTasksByUserId)

export { router as taskRouter };
