import { AppDataSource } from '../../database/DataSource';
import { Team_User } from '../../entities/Team_User';
    
type Team_UserRequest = {
        user_id: number;
    }

export class GetTeam_UserService {
    async execute ({ user_id }: Team_UserRequest): Promise<Team_User | Error>{
        const repo = AppDataSource.getRepository(Team_User);

        const GetTeam_User = await repo.findOne({where: {user_id} })

        await repo.save(GetTeam_User)

        return GetTeam_User
    }
}