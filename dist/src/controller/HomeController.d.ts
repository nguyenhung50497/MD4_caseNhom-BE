import { Request, Response } from "express";
declare class HomeController {
    private songService;
    private categoryService;
    constructor();
    getAllSong: (req: Request, res: Response) => Promise<void>;
    createSong: (req: Request, res: Response) => Promise<void>;
    editSong: (req: Request, res: Response) => Promise<void>;
    moveSong: (req: Request, res: Response) => Promise<void>;
    findByIdSong: (req: Request, res: Response) => Promise<void>;
    findCategory: (req: Request, res: Response) => Promise<void>;
    searchNameSong: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HomeController;
export default _default;
