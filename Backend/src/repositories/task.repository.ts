import { AppDataSource } from "../config/data-source";
import { Task } from "../entities/task.entity";

export class TaskRepository {
    private appDataSource = AppDataSource.getRepository(Task);

    async addTask(task: Partial<Task>) {
        const data = this.appDataSource.create(task);
        await this.appDataSource.save(data);
        return `Task added successfully...!`;
    }

    async updateTask(id: number, task: Partial<Task>) {
        await this.appDataSource.update(id, task);
        return `Task updated successfully...!`;
    }

    async deleteTask(id: number) {
        await this.appDataSource.update(id, { isDeleted: 1 });
        return `Task deleted successfully...!`;
    }

    async getTasks() {
        const result = await this.appDataSource.find({relations: ['assignedTo'], where: {isDeleted: 0}});
        return result;
    }
}
