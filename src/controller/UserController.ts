import {Request, Response} from "express";
import UserServices from "../service/UserService";

class UserController {
    private userServices;

    constructor() {
        this.userServices = UserServices;


    }

    register = async (req: Request, res: Response) => {
        let user = await this.userServices.register(req.body);
        res.status(201).json(user)

    }
    login = async (req: Request, res: Response) => {
        let response = await this.userServices.checkUser(req.body)
        res.status(200).json(response)

    }

    editUser = async (req: Request, res: Response) => {
        let user = await this.userServices.edit(req.params.idUser, req.body);
        res.status(201).json(user)
    }

}


export default new UserController();