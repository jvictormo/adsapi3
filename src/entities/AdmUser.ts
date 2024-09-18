import { Entity, Column, CreateDateColumn ,PrimaryColumn } from "typeorm"

@Entity("AdmUser")
export class Adm {
    @PrimaryColumn()
    email: string;

    @Column()
    name: string;

    @PrimaryColumn()
    cnpj: string;

    @Column()
    companyName: string;

    @CreateDateColumn()
    singUpDate: Date;
}