import { Entity, Column, CreateDateColumn ,PrimaryGeneratedColumn } from "typeorm"

//criando classe para se usar no service
@Entity("AdmUser")
export class Adm {
    @PrimaryGeneratedColumn() //coluna para criar chave primária
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cnpj: string;

    @Column()
    companyName: string;

    @CreateDateColumn() //coluna que declara quando o registro foi cadastrado
    signUpDate: Date;

}