import {Router} from "express";
import playlistController from "../controller/PlaylistController";
import {auth} from "../middleware/auth";
import {userAuth} from "../middleware/user";





export const playlistRouter = Router();
playlistRouter.get('',playlistController.getAll);
playlistRouter.use(auth);
playlistRouter.post('/', userAuth,playlistController.createPlaylist);
playlistRouter.put('/:idPlaylist', userAuth,playlistController.editPlaylist);
playlistRouter.get('/:idPlaylist',playlistController.findByIdPlaylist);
playlistRouter.get('/my-playlist/:idUser',playlistController.showPlaylistByIdUser)