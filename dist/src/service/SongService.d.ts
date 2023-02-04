declare class SongService {
    private songRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (song: any) => Promise<any>;
    findById: (idSong: any) => Promise<any>;
    updateSong: (idSong: any, newSong: any) => Promise<any>;
    moveSong: (idSong: any) => Promise<any>;
    findByNameSong: (value: any) => Promise<any>;
    findSongByIdUser: (id: any) => Promise<any>;
    checkUser: (idUser: any, idSong: any) => Promise<boolean>;
    checkCount: (idSong: any) => Promise<any>;
}
declare const _default: SongService;
export default _default;
