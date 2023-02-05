import {AppDataSource} from "../data-source";
import {Album} from "../model/album";
import playlistController from "../controller/PlaylistController";
import {Playlist} from "../model/playlist";

class PlaylistService{
    private playlistRepository
    constructor() {
        this.playlistRepository = AppDataSource.getRepository(Playlist)
    }
    getAllPlaylist = async ()=> {
        let sql = `select * from playlist p join user u on p.idUser = u.idUser`;
        let playlists = await this.playlistRepository.query(sql);
        return playlists;

    }
    save = async (playlist)=> {

        return this.playlistRepository.save(playlist)
    }
    findById = async (idPlaylist)=> {
        let playlists = await this.playlistRepository.findOneBy({idPlaylist :idPlaylist})
        return playlists
    }
    updatePlaylist= async (idPlaylist,newPlaylist)=>{
        let playlists = await this.playlistRepository.findOneBy({idPlaylist: idPlaylist})
        if (!playlists) {
            return null
        }
        return await this.playlistRepository.update({idPlaylist: idPlaylist}, newPlaylist)
    }
    findPlaylistByIdUser = async (idUser) => {
        let sql = `select p.namePlaylist from playlist p join user u on p.idUser = u.idUser where u.idUser  = ${idUser}`
        let playlists = this.playlistRepository.query(sql)
        return playlists
    }
    checkUser = async (idUser, idPlaylist) => {
        let sql = `select p.idUser from playlist p join user u on p.idUser = u.idUser where idPlaylist = ${idPlaylist}`;
        let checkIdUser = await this.playlistRepository.query(sql);
        if (checkIdUser[0].idUser === idUser) {
            return true;
        }
        return false;
    }

}
export default new PlaylistService();