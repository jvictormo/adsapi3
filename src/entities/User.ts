import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm"
//criando classe para se usar no server
@Entity("User")
export class User {
    @PrimaryGeneratedColumn() //coluna chave primária
    id: number;

    @Column()
    leaderEmail: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    companyName: string;

    @CreateDateColumn() //coluna que declara quando o registro foi cadastrado
    signUpDate: Date;
}