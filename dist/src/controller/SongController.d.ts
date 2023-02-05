import { Request, Response } from "express";
declare class SongController {
    private songService;
    private categoryService;
    constructor();
    getAllSong: (req: Request, res: Response) => Promise<void>;
    getMySong: (req: Request, res: Response) => Promise<void>;
    createSong: (req: Request, res: Response) => Promise<void>;
    editSong: (req: Request, res: Response) => Promise<void>;
    removeSong: (req: Request, res: Response) => Promise<void>;
    findByIdSong: (req: Request, res: Response) => Promise<void>;
    findCategory: (req: Request, res: Response) => Promise<void>;
    searchNameSong: (req: Request, res: Response) => Promise<void>;
    findSongByIdUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    countSong: (req: Request, res: Response) => Promise<void>;
}
declare const _default: SongController;
export default _default;
