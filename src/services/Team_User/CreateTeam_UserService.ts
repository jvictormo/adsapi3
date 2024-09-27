import { AppDataSource } from '../../database/DataSource';
import { Team_User } from '../../entities/Team_User';
//objeto para manipulação
type Team_UserRequest = {
        team_id: number;
        user_id: number;
    }

export class CreateTeam_UserService {
    async execute ({team_id, user_id}: Team_UserRequest): Promise<Team_User | Error>{
        //conexão com a database
        const repo = AppDataSource.getRepository(Team_User);
        //insere os dados na tabela
        const Team_UserInsert = repo.create({team_id, user_id})
        //salva a tabela
        await repo.save(Team_UserInsert)

        return Team_UserInsert
    }
}