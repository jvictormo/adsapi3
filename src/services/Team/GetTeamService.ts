import { AppDataSource } from '../../database/DataSource';
import { Team } from '../../entities/Team';
// objeto para manipulação
type TeamRequest = {
        id: number;
    }

export class GetTeamService {
    async execute ({ id }: TeamRequest): Promise<Team | Error>{
        //conexão com a database
        const repo = AppDataSource.getRepository(Team);
        //verificia se a equipe existe
        const TeamFind = await repo.findOne({where: {id} })

        if (!TeamFind) {
            throw new Error("Team not found");
        }

        return TeamFind
    }
}