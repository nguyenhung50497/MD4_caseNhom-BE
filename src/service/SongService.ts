import {Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Song} from "../model/song";

class SongService {
    private songRepository

    constructor() {
        this.songRepository = AppDataSource.getRepository(Song)
    }

    getAll = async () => {
        let sql = `select *
                   from album
                            join song s on album.idAlbum = s.idAlbum
                            join category c on s.idCategory = c.idCategory`;
        let songs = await this.songRepository.query(sql)
        return songs;
    }
    save = async (song) => {
        return this.songRepository.save(song)
    }
    findById = async (idSong) => {
        let songs = await this.songRepository.findOneBy({idSong: idSong})
        return songs
    }
    updateSong = async (idSong, newSong) => {
        let songs = await this.songRepository.findOneBy({idSong: idSong})
        if (!songs) {
            return null
        }
        return await this.songRepository.update({idSong: idSong}, newSong)
    }
    moveSong = async (idSong) => {
        let songs = await this.songRepository.findOneBy({idSong: idSong});
        if (!songs) {
            return null
        }
        return this.songRepository.delete({idSong: idSong});
    }
    findByNameSong = async (value) => {

    }

    findSongByIdUser = async (id) => {
        let sql = `select *
                   from song
                            join album a on song.idAlbum = a.idAlbum
                            join user u on a.idUser = u.idUser
                   where a.idUser = ${id}`
        let songs = this.songRepository.query(sql)
        return songs
    }

    checkUser = async (idUser, idSong) => {
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
    }

}

export default new SongService();