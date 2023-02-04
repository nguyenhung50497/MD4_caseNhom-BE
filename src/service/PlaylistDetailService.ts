import {AppDataSource} from "../data-source";
import {PlaylistDetail} from "../model/playlistDetail";

class PlaylistDetailService{
    private playlistDetailRepository;
    constructor() {
        this.playlistDetailRepository = AppDataSource.getRepository(PlaylistDetail)
    }
    getAllPlaylistDetail = async () => {
        let sql = `select *
                   from song
                            join playlist_detail pd on song.idSong = pd.idSong
                            join playlist p on pd.idPlaylist = p.idPlaylist;`
        let playlistDetails = await this.playlistDetailRepository.query(sql);
        return playlistDetails
    }
    save = async (playlistDetail)=> {
        console.log(playlistDetail)
        return this.playlistDetailRepository.save(playlistDetail)
    }
    removeSongPlaylist = async (idPlaylistDetail) => {
        let playlistDetails = await this.playlistDetailRepository.findOneBy({idPlaylistDetail: idPlaylistDetail});
        if (!playlistDetails) {
            return null
        }
        return this.playlistDetailRepository.delete({idPlaylistDetail: idPlaylistDetail});
    }
    addS

}
export default new PlaylistDetailService();