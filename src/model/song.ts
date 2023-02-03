import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    idSong: number;
    @Column({type: "varchar", length: 255})
    nameSong: string;
    @Column()
    singer: string
    @Column()
    author: string;
    @Column()
    idAlbum: number;
    @Column()
    image: string;
    @Column()
    sound: string;
    @Column()
    idCategory: number;
}
