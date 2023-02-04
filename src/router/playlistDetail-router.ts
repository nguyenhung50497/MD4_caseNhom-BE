import {Router} from "express";
import playlistDetailController from "../controller/PlaylistDetailController";
import {auth} from "../middleware/auth";

export const playlistDetailRouter = Router()
playlistDetailRouter.use(auth);
playlistDetailRouter.get('/',playlistDetailController.getAll);
playlistDetailRouter.post('/',playlistDetailController.createPlaylistDetails);//thêm bài hát vào playlist
playlistDetailRouter.delete('/:id',playlistDetailController.removeSongFromPlaylist);//xóa bài hát ra khỏi playlist

