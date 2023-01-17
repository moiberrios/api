import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('apuesta')
export class Apuesta{
    @PrimaryGeneratedColumn()
    apu_id: number;

    @Column()
    apu_monto: number;

    @Column()
    apu_fecha: Date;

    @Column()
    fk_taq: number;

    @Column()
    fk_compra: number;

}