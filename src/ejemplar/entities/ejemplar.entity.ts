import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ejemplar')
export class Ejemplar{
    @PrimaryGeneratedColumn()
    ejemp_id: number;

    @Column()
    ejemp_nro_tatuaje_labial: number;

    @Column()
    ejemp_nombre: string;

    @Column()
    ejemp_speed_rating: number;

    @Column()
    ejemp_pelaje: string;

    @Column()
    ejemp_sexo: string;

    @Column()
    ejemp_fech_nac: Date;

    @Column()
    ejemp_fech_ingreso_hip: Date;

    @Column()
    fk_puesto: number;

    @Column()
    fk_stud: number;

    @Column()
    fk_lugar_ejm: number;

    @Column()
    fk_entrenador: number;

    @Column()
    fk_padre: number;

    @Column()
    fk_madre: number;



}