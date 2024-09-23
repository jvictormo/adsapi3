import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity("User")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    leaderEmail: string;

    @Column()
    name: string;

    @Column()
    email: string;    

    @CreateDateColumn()
    signUpDate: Date;
}