import {Request, Response} from "express";
import UserServices from "../service/UserService";

class UserController {
    private userServices;

    constructor() {
        this.userServices = UserServices;


    }

    getAllUser = async (req: Request, res: Response) => {
        let response = await this.userServices.getAll()
        res.status(200).json(response)
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

    removeUser = async (req: Request, res: Response) => {
        try {
            let id = req.params.idUser;
            let user = await this.userServices.remove(id);
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    showSongCreate = async (req: Request, res: Response)=> {
        try {
        let id = req.params.idUser;
        let user = await this.userServices.showSong(id);
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json(e.message)
    }
    }
}


export default new UserController();