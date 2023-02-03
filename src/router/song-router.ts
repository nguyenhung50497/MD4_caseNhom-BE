import {Router} from "express";
import songController from "../controller/SongController";
import {auth} from "../middleware/auth";
import {userAuth} from "../middleware/user";
export const songRouter = Router()
songRouter.get('',songController.getAllSong)
// songRouter.use(auth)
songRouter.post('/', userAuth,songController.createSong)
songRouter.put('/:idSong', userAuth,songController.editSong)
songRouter.delete('/:idSong',userAuth,songController.removeSong)
// songRouter.get('/:idSong',songController.findByIdSong)
songRouter.get('/playSong/:idSong',songController.countSong)
songRouter.get('/my-song/:idUser',songController.findSongByIdUser)