import { AppDataSource } from '../../database/DataSource';
import { Team } from '../../entities/Team';
//objeto para manipulação 
type TeamRequest = {
        id: number;
    }

export class DeleteTeamService {
    async execute ({ id }: TeamRequest): Promise<string | Error>{
        //conexão com a database
        const repo = AppDataSource.getRepository(Team);
        //acha o usuário com base no id
        const TeamFind = await repo.findOne({where: {id} })

        if (!TeamFind) {
            throw new Error("Team not found");
        }

        //deleta o usuário
        await repo.delete(TeamFind)

        return "Team deleted successfully"
    }
}