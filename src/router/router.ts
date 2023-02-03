import {Router} from "express";
import {songRouter} from "./song-router";
import {categoryRouter} from "./category-router";
import homeController from "../controller/SongController";
import {albumRouter} from "./album-router";
import {userRouter} from "./user-router";
import {adminRouter} from "./admin-router";
export  const router = Router()
router.use('/songs',songRouter);
router.use('/users',userRouter);
router.use('/admins',adminRouter);
router.use('/albums',albumRouter);
router.use('/categories',categoryRouter);
router.get('/find-by-name', homeController.searchNameSong);
