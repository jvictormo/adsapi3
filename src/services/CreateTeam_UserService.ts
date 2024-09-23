import { AppDataSource } from '../database/DataSource';
import { Team_User } from '../entities/Team_User';
    
type Team_UserRequest = {
        team_id: number;
        leader_id: number;
        user_id: number;
    }

export class CreateTeam_UserService {
    async execute ({team_id, leader_id, user_id}: Team_UserRequest): Promise<Team_User | Error>{
        const repo = AppDataSource.getRepository(Team_User);

        const Team_UserInsert = repo.create({team_id, leader_id, user_id})

        await repo.save(Team_UserInsert)

        return Team_UserInsert
    }
}