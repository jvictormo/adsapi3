import { AppDataSource } from '../../database/DataSource';
import { Team } from '../../entities/Team';
    
type TeamRequest = {
        id: number;
    }

export class DeleteTeamService {
    async execute ({ id }: TeamRequest): Promise<string | Error>{
        const repo = AppDataSource.getRepository(Team);

        const TeamFind = await repo.findOne({where: {id} })

        if (!TeamFind) {
            throw new Error("Team not found");
        }

        await repo.delete(TeamFind)

        return "Team deleted successfully"
    }
}