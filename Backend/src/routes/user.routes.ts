import { UserController } from "../controllers/user.controller";

const express = require("express");



const router = express.Router();
const userController = new UserController();

router.post('/add-user',  userController.addUser);
router.delete('/delete-user/:id', userController.deleteUser);
router.put('/update-user/:id', userController.updateUser);
router.get('/get-user', userController.getUsers);

export{router as userRouter }


