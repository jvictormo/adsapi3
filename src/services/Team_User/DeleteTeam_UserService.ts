import { AppDataSource } from '../../database/DataSource';
import { Team_User } from '../../entities/Team_User';
    
type Team_UserRequest = {
        id: number;
    }

export class DeleteTeam_UserService {
    async execute ({ id }: Team_UserRequest): Promise<string | Error>{
        const repo = AppDataSource.getRepository(Team_User);

        const Team_UserFind = await repo.findOne({ where: { id } })

        if (!Team_UserFind) {
            throw new Error("User Team not found");
        }

        await repo.remove(Team_UserFind)

        return "User Team deleted successfully"
    }
}