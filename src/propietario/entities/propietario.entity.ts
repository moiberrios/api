import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('propietario')
export class Propietario{
    @PrimaryGeneratedColumn()
    asoc_prop_id: number;

    @Column()
    asoc_prop_correo_electronico: string;

    @Column()
    asoc_prop_id_habitacion: number;

}