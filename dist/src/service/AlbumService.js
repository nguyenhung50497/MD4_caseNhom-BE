"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const album_1 = require("../model/album");
class AlbumService {
    constructor() {
        this.getAllAlbum = async () => {
            let sql = `select a.idAlbum,a.nameAlbum,u.idUser,username from album a join user u on a.idUser = u.idUser`;
            let albums = await this.albumRepository.query(sql);
            return albums;
        };
        this.save = async (album) => {
            return this.albumRepository.save(album);
        };
        this.findById = async (idAlbum) => {
            let albums = await this.albumRepository.findOneBy({ idAlbum: idAlbum });
            return albums;
        };
        this.removeAlbum = async (idAlbum) => {
            let albums = await this.albumRepository.findOneBy({ idAlbum: idAlbum });
            if (!albums) {
                return null;
            }
            return this.albumRepository.delete({ idAlbum: idAlbum });
        };
        this.albumRepository = data_source_1.AppDataSource.getRepository(album_1.Album);
    }
}
exports.default = new AlbumService();
//# sourceMappingURL=AlbumService.js.map