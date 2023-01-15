import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('jinete')
export class Jinete{
    @PrimaryGeneratedColumn()
    asoc_jin_id: number;

    @Column()
    asoc_jin_altura: number;

    @Column()
    asoc_jin_peso_promedio: number;

    @Column()
    asoc_jin_rango: number;
}