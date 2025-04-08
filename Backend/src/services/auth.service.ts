import { AuthRepository } from "../repositories/auth.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../entities/user.entity";

export class AuthService {
  private authRepo = new AuthRepository();

  async loginUser(userEmail: string, pwd: string) {
    const user = await this.authRepo.loginUser(userEmail, pwd);
    if (user?.password) {
      const isPasswordValid = await bcrypt.compare(pwd, user.password!); // Compare hashed password
      if (isPasswordValid) {
        const secret = process.env.SECRET_KEY || "secret_key";
        const token = jwt.sign({ id:user.id, role: user.role }, secret);
        return { success: true, token, id: user.id, role: user.role };
      } else {
        return `Invalid credentials!`;
      }
    } else {
      return `User not found!`;
    }
  }

  async registerUser(user: Partial<User>) {
    try {
      if (user.password) {
        const hashedPassword = await bcrypt.hash(user.password, 10); // Hash password with salt rounds
        user.password = hashedPassword;
        console.log(user);
        
        const result = await this.authRepo.registerUser(user);
        console.log(result);

        return result;
      }
    } catch (error) {
      return `Error: ${error}`;
    }
  }
}
