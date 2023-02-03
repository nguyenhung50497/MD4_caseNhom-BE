import {Router} from "express";
import songController from "../controller/SongController";
export const songRouter = Router()
songRouter.get('',songController.getAllSong)
songRouter.post('/',songController.createSong)
songRouter.put('/:idSong',songController.editSong)
songRouter.delete('/:idSong',songController.moveSong)
songRouter.get('/:id',songController.findByIdSong)