import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user.entity";
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export class AuthRepository{

    private appDataSource = AppDataSource.getRepository(User)

    async registerUser(user: Partial<User>) {
        const newUser = await this.appDataSource.create(user)
        await this.appDataSource.save(newUser);
        return `User registered successfully!`;
    }

    async loginUser(email: string, password: string) {
       
        const result = await this.appDataSource.findOne({where: {email: email}});
        if(result?.email){
            return {email:result.email, password:result.password}
        }
    }
}