import {Router} from "express";

import UserController from "../controller/Usercontroller";
import userController from "../controller/Usercontroller";
import {adminAuth} from "../middleware/admin";
import {auth} from "../middleware/auth";

export const adminRouter = Router();
adminRouter.use(auth);
adminRouter.get('', userController.getAllUser)

adminRouter.delete('/:idUser', adminAuth, UserController.removeUser)