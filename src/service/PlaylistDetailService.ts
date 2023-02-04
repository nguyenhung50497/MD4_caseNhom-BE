import {AppDataSource} from "../data-source";

class PlaylistDetailService{
    private playlistDetailRepository;
    constructor() {
        this.playlistDetailRepository = AppDataSource.getRepository(PlaylistDetailService)
    }
    getAllPlaylistDetail = async () => {
        let sql = `select *
                   from song
                            join playlist_detail pd on song.idSong = pd.idSong
                            join playlist p on pd.idPlaylist = p.idPlaylist;`
        let playlistDetails = await this.playlistDetailRepository.query(sql);
        return playlistDetails
    }
    addS

}
export default new PlaylistDetailService();