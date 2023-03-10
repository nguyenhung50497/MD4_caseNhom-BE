"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const album_1 = require("../model/album");
class AlbumService {
    constructor() {
        this.getAllAlbum = async () => {
            let sql = `select * from album a join user u on a.idUser = u.idUser`;
            let albums = await this.albumRepository.query(sql);
            if (!albums) {
                return null;
            }
            return albums;
        };
        this.save = async (album) => {
            return this.albumRepository.save(album);
        };
        this.findById = async (idAlbum) => {
            let albums = await this.albumRepository.findOneBy({ idAlbum: idAlbum });
            if (!albums) {
                return null;
            }
            return albums;
        };
        this.updateAlbum = async (idAlbum, newAlbum) => {
            let albums = await this.albumRepository.findOneBy({ idAlbum: idAlbum });
            if (!albums) {
                return null;
            }
            return await this.albumRepository.update({ idAlbum: idAlbum }, newAlbum);
        };
        this.removeAlbum = async (idAlbum) => {
            let albums = await this.albumRepository.findOneBy({ idAlbum: idAlbum });
            if (!albums) {
                return null;
            }
            return this.albumRepository.delete({ idAlbum: idAlbum });
        };
        this.checkUser = async (idUser, idAlbum) => {
            let sql = `select u.idUser from album a join user u on a.idUser = u.idUser where idAlbum = ${idAlbum}`;
            let checkIdUser = await this.albumRepository.query(sql);
            if (checkIdUser[0].idUser === idUser) {
                return true;
            }
            return false;
        };
        this.myAlbum = async (idUser) => {
            let sql = `select * from album a join user u on a.idUser = u.idUser where a.idUser = ${idUser}`;
            let albums = await this.albumRepository.query(sql);
            if (!albums) {
                return null;
            }
            return albums;
        };
        this.albumDetail = async (idAlbum) => {
            let sql = `select * from album a join user u on a.idUser = u.idUser join song s on a.idAlbum = s.idAlbum join category c on s.idcategory = c.idCategory where a.idAlbum = ${idAlbum}`;
            let albums = await this.albumRepository.query(sql);
            if (!albums) {
                return null;
            }
            return albums;
        };
        this.albumRepository = data_source_1.AppDataSource.getRepository(album_1.Album);
    }
}
exports.default = new AlbumService();
//# sourceMappingURL=AlbumService.js.map