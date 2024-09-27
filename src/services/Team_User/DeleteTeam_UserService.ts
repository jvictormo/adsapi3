import { AppDataSource } from '../../database/DataSource';
import { Team_User } from '../../entities/Team_User';
//objeto para manipulação
type Team_UserRequest = {
        id: number;
    }

export class DeleteTeam_UserService {
    async execute ({ id }: Team_UserRequest): Promise<string | Error>{
        //conexão com a database
        const repo = AppDataSource.getRepository(Team_User);
        //acha o user pelo id
        const Team_UserFind = await repo.findOne({ where: { id } })

        if (!Team_UserFind) {
            throw new Error("User Team not found");
        }
        //remove a entrada da tabela
        await repo.remove(Team_UserFind)

        return "User Team deleted successfully"
    }
}