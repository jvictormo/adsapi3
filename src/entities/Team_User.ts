import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

    @Entity('Team_User')
    export class Team_User{
        @PrimaryGeneratedColumn()
        id: number;
   
        @Column()
        team_id: number;
        
        @Column()
        leader_id: number;
        
        @Column()
        user_id: number;
        }