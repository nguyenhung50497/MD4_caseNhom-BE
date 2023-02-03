"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const song_1 = require("../model/song");
class SongService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from album join song s on album.idAlbum = s.idAlbum join category c on s.idCategory = c.idCategory`;
            let songs = await this.songRepository.query(sql);
            return songs;
        };
        this.save = async (song) => {
            return this.songRepository.save(song);
        };
        this.findById = async (idSong) => {
            let songs = await this.songRepository.findOneBy({ idSong: idSong });
            return songs;
        };
        this.updateSong = async (idSong, newSong) => {
            let songs = await this.songRepository.findOneBy({ idSong: idSong });
            if (!songs) {
                return null;
            }
            return await this.songRepository.update({ idSong: idSong }, newSong);
        };
        this.moveSong = async (idSong) => {
            let songs = await this.songRepository.findOneBy({ idSong: idSong });
            if (!songs) {
                return null;
            }
            return this.songRepository.delete({ idSong: idSong });
        };
        this.findByNameSong = async (value) => {
        };
        this.checkUser = async (idUser, idSong) => {
            let sql = `select u.idUser from song s join album a on s.idAlbum = a.idAlbum join user u on a.idUser = u.idUser where idSong = ${idSong}`;
            let checkIdUser = await this.songRepository.query(sql);
            if (checkIdUser[0].idUser === idUser) {
                return true;
            }
            return false;
        };
        this.songRepository = data_source_1.AppDataSource.getRepository(song_1.Song);
    }
}
exports.default = new SongService();
//# sourceMappingURL=SongService.js.map