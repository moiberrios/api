import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('entrenador')
export class Entrenador{
    @PrimaryGeneratedColumn()
    asoc_ent_id: number;
}