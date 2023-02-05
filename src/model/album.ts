import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    idAlbum: number;
    @Column()
    nameAlbum: string;
    @Column()
    idUser: number;
    @Column()
    imageAlbum: string;
    @Column({default: 0})
    countSong: number;
}