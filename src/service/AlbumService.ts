
import {AppDataSource} from "../data-source";
import {Album} from "../model/album";

class AlbumService {
    private albumRepository
    constructor() {
        this.albumRepository = AppDataSource.getRepository(Album)
    }

    getAllAlbum = async () => {
        let sql = `select a.idAlbum,a.nameAlbum,u.idUser,username from album a join user u on a.idUser = u.idUser`
        let albums = await this.albumRepository.query(sql);
        return albums
    }
    save = async (album) => {
        return this.albumRepository.save(album)
    }
    findById = async (idAlbum)=> {
        let albums = await this.albumRepository.findOneBy({idAlbum :idAlbum})
        return albums
    }
    // update = async (idAlbum,newAlbum) => {
    //     let albums = await this.albumRepository.findOneBy({idAlbum: idAlbum})
    //     if (!albums) {
    //         return null
    //     }
    //     return await this.albumRepository.update({idAlbum: idAlbum}, newAlbum)
    // }
    removeAlbum = async (idAlbum) => {
        let albums = await this.albumRepository.findOneBy({idAlbum : idAlbum});
        if(!albums){
            return null
        }
        return this.albumRepository.delete({idAlbum : idAlbum});
    }
}
export default new AlbumService();
