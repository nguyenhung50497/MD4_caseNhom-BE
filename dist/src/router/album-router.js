"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumRouter = void 0;
const express_1 = require("express");
const AlbumController_1 = __importDefault(require("../controller/AlbumController"));
exports.albumRouter = (0, express_1.Router)();
exports.albumRouter.get('', AlbumController_1.default.getAll);
exports.albumRouter.post('/', AlbumController_1.default.createAlbum);
exports.albumRouter.delete('/:id', AlbumController_1.default.removeAlbum);
exports.albumRouter.get('/:id', AlbumController_1.default.findByIdAlbum);
//# sourceMappingURL=album-router.js.map