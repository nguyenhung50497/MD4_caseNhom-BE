declare class AlbumService {
    private albumRepository;
    constructor();
    getAllAlbum: () => Promise<any>;
    save: (album: any) => Promise<any>;
    findById: (idAlbum: any) => Promise<any>;
    updateAlbum: (idAlbum: any, newAlbum: any) => Promise<any>;
    removeAlbum: (idAlbum: any) => Promise<any>;
    checkUser: (idUser: any, idAlbum: any) => Promise<boolean>;
    myAlbum: (idUser: any) => Promise<any>;
    albumDetail: (idAlbum: any) => Promise<any>;
}
declare const _default: AlbumService;
export default _default;
