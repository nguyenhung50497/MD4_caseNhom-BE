declare class AlbumService {
    private albumRepository;
    constructor();
    getAllAlbum: () => Promise<any>;
    save: (album: any) => Promise<any>;
    findById: (idAlbum: any) => Promise<any>;
    removeAlbum: (idAlbum: any) => Promise<any>;
}
declare const _default: AlbumService;
export default _default;