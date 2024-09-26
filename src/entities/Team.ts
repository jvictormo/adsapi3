import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

    @Entity('Team')
    export class Team{
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        description: string;
   
        @Column()
        name: string;

        @Column()
        companyName: string;
        
}