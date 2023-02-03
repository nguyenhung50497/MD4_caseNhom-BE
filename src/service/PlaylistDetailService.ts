import {AppDataSource} from "../data-source";

class PlaylistDetailService{
    private playlistDetailRepository;
    constructor() {
        this.playlistDetailRepository = AppDataSource.getRepository(PlaylistDetailService)
    }
    getAllPlaylistDetail = async () => {
        let sql = `select a.idAlbum,a.nameAlbum,u.idUser,username from album a join user u on a.idUser = u.idUser`
        let albums = await this.playlistDetailRepository.query(sql);
        return albums
    }

}
export default new PlaylistDetailService();