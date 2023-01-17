import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('carrera')
export class Carrera{
    @PrimaryGeneratedColumn()
    carr_id: number;

    @Column()
    carr_numero_llamado: number;

    @Column()
    fk_horario: number;

    @Column()
    fk_cat: number;

    @Column()
    fk_tip_carr: number;

}