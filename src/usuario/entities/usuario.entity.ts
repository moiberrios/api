import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class Usuario{
    @PrimaryGeneratedColumn()
    us_id: number;

    @Column()
    us_nombre: string;

    @Column()
    us_contrasenna: string;

    @Column()
    fk_rol: number;

    @Column()
    fk_asoc: number;

    @Column()
    fk_taq: number;

}