"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AlbumService_1 = __importDefault(require("../service/AlbumService"));
class AlbumController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let albums = await AlbumService_1.default.getAllAlbum();
                res.status(200).json(albums);
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
        this.removeAlbum = async (req, res) => {
            try {
                let idAlbum = req.params.id;
                let albums = await this.albumService.removeAlbum(idAlbum);
                res.status(200).json(albums);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findByIdAlbum = async (req, res) => {
            try {
                let idAlbum = req.params.idAlbum;
                let albums = await AlbumService_1.default.findById(idAlbum);
                res.status(200).json(albums);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.albumService = AlbumService_1.default;
    }
}
exports.default = new AlbumController();
//# sourceMappingURL=AlbumController.js.map