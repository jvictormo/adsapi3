import { Entity, Column, CreateDateColumn ,PrimaryGeneratedColumn } from "typeorm"

@Entity("AdmUser")
export class Adm {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cnpj: string;

    @Column()
    companyName: string;

    @CreateDateColumn()
    signUpDate: Date;

}