const express = require("express");
import { UserController } from "../controllers/user.controller";


const router = express.Router();
const userController = new UserController();

router.post('/add-user', userController.createUser);
router.delete('/delete-user/:id', userController.deleteUser);

export{router as userRouter }


