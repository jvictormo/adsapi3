import { AppDataSource } from '../database/DataSource';
import { Team } from '../entities/Team';
    
type TeamRequest = {
        leader_id: number;
        name: string;
    }

export class CreateTeamService {
    async execute ({leader_id, name}: TeamRequest): Promise<Team | Error>{
        const repo = AppDataSource.getRepository(Team);

        const TeamInsert = repo.create({leader_id, name})

        await repo.save(TeamInsert)

        return TeamInsert
    }
}