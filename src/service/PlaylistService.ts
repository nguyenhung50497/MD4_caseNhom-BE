import {AppDataSource} from "../data-source";
import {Album} from "../model/album";

class PlaylistService{
    private playlistRepository
    constructor() {
        this.playlistRepository = AppDataSource.getRepository(Album)
    }
    getAll = async ()=> {

    }
    save = async (playlist)=> {
        return this.playlistRepository.save(playlist)
    }
}