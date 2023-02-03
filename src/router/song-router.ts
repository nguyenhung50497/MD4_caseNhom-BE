import {Router} from "express";
import songController from "../controller/SongController";
import {auth} from "../middleware/auth";
import {userAuth} from "../middleware/user";
export const songRouter = Router()
songRouter.get('',songController.getAllSong)
// songRouter.use(auth)
songRouter.post('/', userAuth,songController.createSong)
songRouter.put('/:idSong', userAuth,songController.editSong)
songRouter.delete('/:idSong',songController.removeSong)
songRouter.get('/:id',songController.findByIdSong)
songRouter.get('/my-song/:idUser',songController.findSongByIdUser)