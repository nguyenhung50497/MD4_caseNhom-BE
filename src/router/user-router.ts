import {Router} from "express";

import UserController from "../controller/UserController";
import {userAuth} from "../middleware/user";
import {auth} from "../middleware/auth";

export const userRouter = Router();
userRouter.post('/register',UserController.register)

userRouter.post('/login',UserController.login)
userRouter.use(auth)

userRouter.put('/:idUser', userAuth, UserController.editUser)