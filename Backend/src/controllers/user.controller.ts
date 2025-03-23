import { UserService } from "../services/user.service"
import { Request, Response } from "express";

const userService = new UserService();

export class UserController{
    createUser = async(req: Request, res: Response) =>{
        const {name, email, profile} = req.body;
        await console.log(profile);
        
        const user = await userService.createUser(name, email, profile);
        res.status(201).json(user);
    }

    deleteUser = async(req: Request, res: Response) => {
        await userService.deleteUser(Number(req.params.id));
        res.status(201).json({ message: "User deleted...!"});
    }
}