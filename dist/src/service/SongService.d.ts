declare class SongService {
    private songRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (song: any) => Promise<any>;
    findById: (idSong: any) => Promise<any>;
    updateSong: (idSong: any, newSong: any) => Promise<any>;
    moveSong: (idSong: any) => Promise<any>;
    findByNameSong: (value: any) => Promise<void>;
}
declare const _default: SongService;
export default _default;
