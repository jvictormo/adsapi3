import { AppDataSource } from '../../database/DataSource';
import { Team } from '../../entities/Team';
//objeto para manipulação
type TeamRequest = {
        description: string;
        name: string;
        companyName: string;
    }

export class CreateTeamService {
    async execute ({description, name, companyName}: TeamRequest): Promise<Team | Error>{
        //conexão com a database
        const repo = AppDataSource.getRepository(Team);

        //insere os dados na tabela
        const TeamInsert = repo.create({description, name, companyName})
        //salva a tabela
        await repo.save(TeamInsert)

        return TeamInsert
    }
}