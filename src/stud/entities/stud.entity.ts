import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('stud')
export class Stud{
    @PrimaryGeneratedColumn()
    stu_id: number;

    @Column()
    stu_nombre: string;

    @Column()
    stu_fech_creacion: Date;
}