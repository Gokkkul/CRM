import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user.entity";

export class UserRepository {
    private appDataSource = AppDataSource.getRepository(User);

    async addUser(user: Partial<User>) {
        const data = this.appDataSource.create(user);
        await this.appDataSource.save(data);
        return `User added successfully...!`;
    }

    async updateUser(id: number, user: Partial<User>) {
        await this.appDataSource.update(id, user);
        return `User updated successfully...!`;
    }

    async deleteUser(id: number) {
        await this.appDataSource.update(id, { isDeleted: 1 });
        return `User deleted successfully...!`;
    }

    async getUsers() {
        const result = await this.appDataSource.find({where: {isDeleted: 0}});
        return result;
    }
}
