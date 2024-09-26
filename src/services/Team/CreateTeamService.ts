import { AppDataSource } from '../../database/DataSource';
import { Team } from '../../entities/Team';
    
type TeamRequest = {
        description: string;
        name: string;
        companyName: string;
    }

export class CreateTeamService {
    async execute ({description, name, companyName}: TeamRequest): Promise<Team | Error>{
        const repo = AppDataSource.getRepository(Team);

        const TeamInsert = repo.create({description, name, companyName})

        await repo.save(TeamInsert)

        return TeamInsert
    }
}