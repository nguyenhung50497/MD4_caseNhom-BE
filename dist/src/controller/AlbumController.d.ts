import { Request, Response } from "express";
declare class AlbumController {
    private albumService;
    private userService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    createAlbum: (req: Request, res: Response) => Promise<void>;
    removeAlbum: (req: Request, res: Response) => Promise<void>;
    findByIdAlbum: (req: Request, res: Response) => Promise<void>;
    showMyAlbum: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AlbumController;
export default _default;
