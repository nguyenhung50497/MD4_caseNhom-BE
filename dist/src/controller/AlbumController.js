"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AlbumService_1 = __importDefault(require("../service/AlbumService"));
const SongService_1 = __importDefault(require("../service/SongService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
class AlbumController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let albums = await AlbumService_1.default.getAllAlbum();
                let songs = await SongService_1.default.top4Song();
                let data = [albums, songs];
                res.status(200).json(data);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.createAlbum = async (req, res) => {
            try {
                let albums = await AlbumService_1.default.save(req.body);
                res.status(200).json(albums);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.editAlbum = async (req, res) => {
            try {
                let idAlbum = req.params.id;
                let newAlbum = req.body;
                let idUser = req["decoded"].idUser;
                let check = await this.albumService.checkUser(idUser, idAlbum);
                if (check) {
                    let albums = await this.albumService.updateAlbum(idAlbum, newAlbum);
                    res.status(200).json(albums);
                }
                else {
                    res.status(401).json('invalid');
                }
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.removeAlbum = async (req, res) => {
            try {
                let idAlbum = req.params.id;
                let idUser = req["decoded"].idUser;
                let check = await this.albumService.checkUser(idUser, idAlbum);
                if (check) {
                    let albums = await this.albumService.removeAlbum(idAlbum);
                    res.status(200).json(albums);
                }
                else {
                    res.status(401).json('invalid');
                }
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findByIdAlbum = async (req, res) => {
            try {
                let idAlbum = req.params.id;
                let albums = await AlbumService_1.default.findById(idAlbum);
                res.status(200).json(albums);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.showMyAlbum = async (req, res) => {
            try {
                let albums = await AlbumService_1.default.myAlbum(req["decoded"].idUser);
                res.status(200).json(albums);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.showAlbumDetail = async (req, res) => {
            try {
                let albums = await AlbumService_1.default.albumDetail(req.params.idAlbum);
                let categories = await CategoryService_1.default.getAllCategory();
                let data = [albums, categories];
                res.status(200).json(data);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.albumService = AlbumService_1.default;
        this.songService = SongService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new AlbumController();
//# sourceMappingURL=AlbumController.js.map