import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario_post')
export class UsuarioPostEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    contrasenna: number;

}