import { UserController } from "../controllers/user.controller";
import { jwtAuth } from "../middleware/auth.middleware";

const express = require("express");



const router = express.Router();
const userController = new UserController();

router.post('/add-user',  userController.addUser);
router.delete('/delete-user/:id', userController.deleteUser);
router.put('/update-user/:id', userController.updateUser);
router.get('/get-users', userController.getUsers);
router.get('/get-user/',jwtAuth, userController.getUserById);
router.post('/login', userController.login)

export{router as userRouter }


