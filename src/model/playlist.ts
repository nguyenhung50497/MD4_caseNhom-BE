import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Playlist {
    @PrimaryGeneratedColumn()
    idPlaylist: number;
    @Column()
    namePlaylist: string;
    @Column()
    idUser: number;

}