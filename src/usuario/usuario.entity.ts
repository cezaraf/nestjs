import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_usuario' })
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ name: 'nm_usuario', nullable: false })
    nome: string

    @IsNotEmpty()
    @Column({ name: 'nr_telefone', unique: true, nullable: false })
    telefone: string

    @IsEmail()
    @IsNotEmpty()
    @Column({ name: 'ds_email', unique: true, nullable: false })
    email: string
}