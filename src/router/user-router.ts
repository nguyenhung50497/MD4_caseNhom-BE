import {Router} from "express";

import UserController from "../controller/Usercontroller";
import {userAuth} from "../middleware/user";
import userController from "../controller/Usercontroller";

export const userRouter = Router();
userRouter.post('/register',UserController.register)

userRouter.post('/login',UserController.login)

userRouter.put('/:idUser', userAuth, UserController.editUser)