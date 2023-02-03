"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const song_router_1 = require("./song-router");
const category_router_1 = require("./category-router");
const SongController_1 = __importDefault(require("../controller/SongController"));
const album_router_1 = require("./album-router");
const user_router_1 = require("./user-router");
const admin_router_1 = require("./admin-router");
exports.router = (0, express_1.Router)();
exports.router.use('/songs', song_router_1.songRouter);
exports.router.use('/users', user_router_1.userRouter);
exports.router.use('/admins', admin_router_1.adminRouter);
exports.router.use('/albums', album_router_1.albumRouter);
exports.router.use('/categories', category_router_1.categoryRouter);
exports.router.get('/find-by-name', SongController_1.default.searchNameSong);
//# sourceMappingURL=router.js.map