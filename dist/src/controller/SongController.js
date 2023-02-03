"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
const SongService_1 = __importDefault(require("../service/SongService"));
class SongController {
    constructor() {
        this.getAllSong = async (req, res) => {
            try {
                let songs = await SongService_1.default.getAll();
                res.status(200).json(songs);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.createSong = async (req, res) => {
            try {
                let songs = await SongService_1.default.save(req.body);
                res.status(200).json(songs);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.editSong = async (req, res) => {
            try {
                let id = req.params.idSong;
                let songs = await this.songService.updateSong(id, req.body);
                res.status(200).json(songs);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.moveSong = async (req, res) => {
            try {
                let idSong = req.params.idSong;
                let songs = await this.songService.moveSong(idSong);
                res.status(200).json(songs);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findByIdSong = async (req, res) => {
            try {
                let idSong = req.params.id;
                let songs = await SongService_1.default.findById(idSong);
                res.status(200).json(songs);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findCategory = async (req, res) => {
            try {
                let categories = await CategoryService_1.default.getAllCategory();
                res.status(200).json(categories);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.searchNameSong = async (req, res) => {
            try {
                let songs = await this.songService.findByNameSong(req.query.name);
                res.status(200).json(songs);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.songService = SongService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new SongController();
//# sourceMappingURL=SongController.js.map