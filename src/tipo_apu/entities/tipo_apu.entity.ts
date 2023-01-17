import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tipo_apu')
export class Tipo_Apu{
    @PrimaryGeneratedColumn()
    tip_id: number;

    @Column()
    tipo_nombre: string;

    @Column()
    tipo_multiplic: number;

    @Column()
    fk_apuesta: number;

}