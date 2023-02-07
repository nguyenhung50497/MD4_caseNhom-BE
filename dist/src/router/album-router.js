"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumRouter = void 0;
const express_1 = require("express");
const AlbumController_1 = __importDefault(require("../controller/AlbumController"));
const auth_1 = require("../middleware/auth");
const user_1 = require("../middleware/user");
exports.albumRouter = (0, express_1.Router)();
exports.albumRouter.get('', AlbumController_1.default.getAll);
exports.albumRouter.get('/detail/:idAlbum', AlbumController_1.default.showAlbumDetail);
exports.albumRouter.use(auth_1.auth);
exports.albumRouter.post('/', user_1.userAuth, AlbumController_1.default.createAlbum);
exports.albumRouter.put('/:id', user_1.userAuth, AlbumController_1.default.editAlbum);
exports.albumRouter.delete('/:id', AlbumController_1.default.removeAlbum);
exports.albumRouter.get('/my-album', user_1.userAuth, AlbumController_1.default.showMyAlbum);
exports.albumRouter.get('/album-detail/:idAlbum', AlbumController_1.default.showAlbumDetail);
//# sourceMappingURL=album-router.js.map