
import categoryService from "../service/CategoryService";
import {Request, Response} from "express";
import songService from "../service/SongService";

class SongController {
    private songService;
    private categoryService;

    constructor() {
        this.songService = songService;
        this.categoryService = categoryService;
    }

    getAllSong = async (req: Request, res: Response) => {
        try {
            let songs = await songService.getAll();
            res.status(200).json(songs)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
    createSong = async (req: Request, res: Response) => {
        try {
            let songs = await songService.save(req.body);
            res.status(200).json(songs)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
    editSong = async (req: Request, res: Response) => {
        try {
            let idSong = req.params.idSong;
            let idUser = req["decoded"].idUser;
            let check = await this.songService.checkUser(idUser, idSong);
            if (check) {
                let songs = await this.songService.updateSong(idSong, req.body);
                res.status(200).json(songs);
            }
            else {
                res.status(401).json('invalid');
            }
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
    removeSong = async (req: Request, res: Response) => {
        try {
            let idSong = req.params.idSong;
            let idUser = req["decoded"].idUser;
            let check = await this.songService.checkUser(idUser, idSong);
            if (check || (req["decoded"].role === 'admin')) {
                let songs = await this.songService.moveSong(idSong);
                res.status(200).json(songs);
            }
            else {
                res.status(401).json('invalid');
            }
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
    findByIdSong = async (req: Request, res: Response) => {
        try {
            let idSong = req.params.id
            let songs = await songService.findById(idSong);
            res.status(200).json(songs)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    findCategory = async (req: Request, res: Response) => {
        try {
            let categories= await categoryService.getAllCategory();
            res.status(200).json(categories)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
    searchNameSong = async (req: Request,res: Response) => {
        try{
            let songs = await this.songService.findByNameSong(req.query.name)
            res.status(200).json(songs)
        }catch (e){
            res.status(500).json(e.message)
        }

    }


}

export default new SongController();
