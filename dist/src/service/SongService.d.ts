declare class SongService {
    private songRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (song: any) => Promise<any>;
    findById: (idSong: any) => Promise<any>;
    updateSong: (idSong: any, newSong: any) => Promise<any>;
    moveSong: (idSong: any) => Promise<any>;
    findByNameSong: (value: any) => Promise<void>;
    findSongByIdUser: (id: any) => Promise<any>;
    checkUser: (idUser: any, idSong: any) => Promise<boolean>;
}
declare const _default: SongService;
export default _default;
