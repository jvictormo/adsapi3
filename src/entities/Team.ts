import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
//criar classe para se usar no service
    @Entity('Team')
    export class Team{
        @PrimaryGeneratedColumn() //coluna da chave primmária
        id: number;

        @Column()
        description: string;
   
        @Column()
        name: string;

        @Column()
        companyName: string;
        
}