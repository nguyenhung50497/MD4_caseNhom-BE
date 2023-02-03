import {Router} from "express";
import {songRouter} from "./song-router";
import {categoryRouter} from "./category-router";
import homeController from "../controller/SongController";
import {albumRouter} from "./album-router";
import userController from "../controller/UserController";
import {userRouter} from "./user-router";
export  const router = Router()
router.use('/songs',songRouter);
router.use('/users',userRouter);
router.use('/albums',albumRouter);
router.use('/categories',categoryRouter);
router.get('/find-by-name', homeController.searchNameSong);
