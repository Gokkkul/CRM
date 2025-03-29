import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

const userRepo = new UserRepository();

export class UserService {
    async addUser(user: Partial<User>) {
        try {
            const result = await userRepo.addUser(user);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async updateUser(id: number, user: Partial<User>) {
        try {
            const result = await userRepo.updateUser(id, user);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async deleteUser(id: number) {
        try {
            const result = await userRepo.deleteUser(id);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async getUsers() {
        try {
            const result = await userRepo.getUsers();
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }
}
