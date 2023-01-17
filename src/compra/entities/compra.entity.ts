import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('compra')
export class Compra{
    @PrimaryGeneratedColumn()
    co_cod: number;

    @CreateDateColumn()
    co_fecha: Date;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    co_monto: number;

    @Column()
    fk_taq: number;

    @Column()
    fk_cli: number;

}