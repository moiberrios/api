import { Rol } from "./rol.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    us_id: number;

    @Column()
    us_correo: string;

    @Column({unique: true})
    us_nombre:string;

    @Column( {select: false} )
    us_contrasenna: string;

    // @Column({type: 'enum', enum: Rol, default: Rol.USER})
    // fk_rol: Rol; 
    @Column({ default: 1})
    fk_rol: number;
    
    @Column({default: 1})
    fk_asoc: number;

    @Column({default: 1})
    fk_taq: number;
}