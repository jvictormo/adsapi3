import { AppDataSource } from '../../database/DataSource';
import { Team } from '../../entities/Team';
    
type TeamRequest = {
        id: number;
    }

export class GetTeamService {
    async execute ({ id }: TeamRequest): Promise<Team | Error>{
        const repo = AppDataSource.getRepository(Team);

        const TeamFind = await repo.findOne({where: {id} })

        if (!TeamFind) {
            throw new Error("Team not found");
        }

        return TeamFind
    }
}