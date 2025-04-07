import { NextFunction, Response } from "express"
import { User } from "../entities/user.entity"

export const roleBased = (requiredRoles: string []) => {
    return (req: any, res: Response, next: NextFunction) => {
        const user = req.user as User;
        if(!requiredRoles.includes(user.role)){
            res.status(401).json({message: 'You are not authorized'})
            return
        }
        next();
    }
}