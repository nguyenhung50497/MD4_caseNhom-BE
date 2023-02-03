"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.songRouter = void 0;
const express_1 = require("express");
const SongController_1 = __importDefault(require("../controller/SongController"));
const auth_1 = require("../middleware/auth");
const user_1 = require("../middleware/user");
exports.songRouter = (0, express_1.Router)();
exports.songRouter.get('', SongController_1.default.getAllSong);
exports.songRouter.use(auth_1.auth);
exports.songRouter.post('/', user_1.userAuth, SongController_1.default.createSong);
exports.songRouter.put('/:idSong', user_1.userAuth, SongController_1.default.editSong);
exports.songRouter.delete('/:idSong', SongController_1.default.removeSong);
exports.songRouter.get('/:id', SongController_1.default.findByIdSong);
//# sourceMappingURL=song-router.js.map