import { Task } from "../entities/task.entity";
import { TaskRepository } from "../repositories/task.repository";

const taskRepo = new TaskRepository();

export class TaskService {
    async addTask(task: Partial<Task>) {
        try {
            const result = await taskRepo.addTask(task);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async updateTask(id: number, task: Partial<Task>) {
        try {
            const result = await taskRepo.updateTask(id, task);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async deleteTask(id: number) {
        try {
            const result = await taskRepo.deleteTask(id);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async getTasks() {
        try {
            const result = await taskRepo.getTasks();
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }
}
