import playlistDetailService from "../service/PlaylistDetailService";
import userService from "../service/UserService";
import {Request, Response} from "express";

class PlaylistDetailController {
    private playlistDetailService
    private userService = userService
    constructor() {
        this.playlistDetailService = playlistDetailService;
        this.userService = userService;
    }
    getAll = async (req: Request, res: Response)=>{
        try {
            let playlistDetails = await playlistDetailService.getAllPlaylistDetail();
            res.status(200).json(playlistDetails)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}
export default new PlaylistDetailController()
