import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

    @Entity('Team')
    export class Team{
        @PrimaryGeneratedColumn()
        id: number;
   
        @Column()
        leader_id: number;
        
        @Column()
        name: string;
        
}