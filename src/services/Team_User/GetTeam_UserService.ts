import { AppDataSource } from '../../database/DataSource';
import { Team_User } from '../../entities/Team_User';
//objeto para manipulação
type Team_UserRequest = {
        user_id: number;
    }

export class GetTeam_UserService {
    async execute ({ user_id }: Team_UserRequest): Promise<Team_User | Error>{
        //conexão com a database
        const repo = AppDataSource.getRepository(Team_User);
        //acha o usuário pelo id
        const GetTeam_User = await repo.findOne({where: {user_id} })
        //salva a tabela
        await repo.save(GetTeam_User)

        return GetTeam_User
    }
}