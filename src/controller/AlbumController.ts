import {Request, Response} from "express";
import albumService from "../service/AlbumService";
class AlbumController{
    private albumService;
    private userService;
    constructor() {
        this.albumService = albumService
    }
    getAll = async (req: Request, res: Response) => {
        try {
            let albums = await albumService.getAllAlbum();
            res.status(200).json(albums)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    createAlbum = async (req: Request, res: Response) => {
        try {
            let albums = await albumService.save(req.body);
            res.status(200).json(albums)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
    removeAlbum = async (req: Request, res: Response) => {
        try {
            let idAlbum = req.params.id;
            let albums = await this.albumService.removeAlbum(idAlbum);
            res.status(200).json(albums)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
    findByIdAlbum = async (req: Request, res: Response) => {
        try {
            let idAlbum = req.params.idAlbum
            let albums = await albumService.findById(idAlbum);
            res.status(200).json(albums)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}
export default new AlbumController()