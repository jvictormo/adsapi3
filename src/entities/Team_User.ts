import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
//criando classe para se usar no service
    @Entity('Team_User')
    export class Team_User{
        @PrimaryGeneratedColumn() //coluna para chave primária
        id: number;
   
        @Column()
        team_id: number;
        
        @Column()
        user_id: number;
        }