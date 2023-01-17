import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('uniforme')
export class Uniforme{
    @PrimaryGeneratedColumn()
    uni_id: number;

    @Column()
    uni_material: string;

    @Column()
    uni_talla: string;

    @Column()
    fk_gorra: number;

    @Column({default: 1})
    fk_chaq: number;

    @Column({default: 1})
    fk_stud: number;

}