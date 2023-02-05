declare class SongService {
    private songRepository;
    private albumRepository;
    constructor();
    getAll: () => Promise<any>;
    getMySong: (idUser: any) => Promise<any>;
    save: (song: any) => Promise<any>;
    findById: (idSong: any) => Promise<any>;
    updateSong: (idSong: any, newSong: any) => Promise<any>;
    removeSong: (idSong: any) => Promise<any>;
    findByNameSong: (value: any) => Promise<any>;
    findSongByIdUser: (id: any) => Promise<any>;
    checkUser: (idUser: any, idSong: any) => Promise<boolean>;
    checkCount: (idSong: any) => Promise<any>;
    top4Song: () => Promise<any>;
}
declare const _default: SongService;
export default _default;
