"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const song_1 = require("../model/song");
const album_1 = require("../model/album");
class SongService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from album join song s on album.idAlbum = s.idAlbum join category c on s.idCategory = c.idCategory join user u on album.idUser = u.idUser`;
            let songs = await this.songRepository.query(sql);
            return songs;
        };
        this.getMySong = async (idUser) => {
            let sql = `select * from album join song s on album.idAlbum = s.idAlbum join category c on s.idCategory = c.idCategory join user u on album.idUser = u.idUser where u.idUser = ${idUser}`;
            let songs = await this.songRepository.query(sql);
            return songs;
        };
        this.save = async (song) => {
            let albums = await this.albumRepository.findOneBy({ idAlbum: song.idAlbum });
            if (!albums) {
                return null;
            }
            albums.countSong = albums.countSong + 1;
            await this.albumRepository.update({ idAlbum: song.idAlbum }, albums);
            await this.songRepository.save(song);
            return song.idAlbum;
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
            await this.songRepository.update({ idSong: idSong }, newSong);
            return newSong.idAlbum;
        };
        this.removeSong = async (idSong) => {
            let songs = await this.songRepository.findOneBy({ idSong: idSong });
            if (!songs) {
                return null;
            }
            await this.songRepository.delete({ idSong: idSong });
            return songs.idAlbum;
        };
        this.findByNameSong = async (value) => {
            let sql = `select *
                       from album
                                join song s on album.idAlbum = s.idAlbum where s.nameSong like '%${value}%'`;
            let songs = await this.songRepository.query(sql);
            if (!songs) {
                return null;
            }
            return songs;
        };
        this.findSongByIdUser = async (id) => {
            let sql = `select *
                   from song
                            join album a on song.idAlbum = a.idAlbum
                            join user u on a.idUser = u.idUser
                   where a.idUser = ${id}`;
            let songs = this.songRepository.query(sql);
            return songs;
        };
        this.checkUser = async (idUser, idSong) => {
            let sql = `select u.idUser
                   from song s
                            join album a on s.idAlbum = a.idAlbum
                            join user u on a.idUser = u.idUser
                   where idSong = ${idSong}`;
            let checkIdUser = await this.songRepository.query(sql);
            if (checkIdUser[0].idUser === idUser) {
                return true;
            }
            return false;
        };
        this.checkCount = async (idSong) => {
            let songs = await this.songRepository.findOneBy({ idSong: idSong });
            if (!songs) {
                return null;
            }
            songs.count++;
            return await this.songRepository.update({ idSong: idSong }, songs);
        };
        this.top4Song = async () => {
            let sql = `select * from album join song s on album.idAlbum = s.idAlbum join category c on s.idCategory = c.idCategory join user u on album.idUser = u.idUser order by count desc limit 4`;
            let songs = await this.songRepository.query(sql);
            if (!songs) {
                return null;
            }
            return songs;
        };
        this.songRepository = data_source_1.AppDataSource.getRepository(song_1.Song);
        this.albumRepository = data_source_1.AppDataSource.getRepository(album_1.Album);
    }
}
exports.default = new SongService();
//# sourceMappingURL=SongService.js.map