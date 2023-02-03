import {Router} from "express";
import albumController from "../controller/AlbumController";
export const albumRouter = Router()
albumRouter.get('',albumController.getAll)
albumRouter.post('/',albumController.createAlbum)
// albumRouter.put('/:idSong',albumController.ed)
albumRouter.delete('/:id',albumController.removeAlbum)
albumRouter.get('/:id',albumController.findByIdAlbum)