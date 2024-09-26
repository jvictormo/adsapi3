import { AppDataSource } from "../../database/DataSource";
import { Team_User } from "../../entities/Team_User";

type UserRequest = {
    team_id: number;
    user_id: number;
}

export class UpdateTeam_UserService {
    async execute({ team_id, user_id }: UserRequest): Promise<Team_User | Error> {
        const repo = AppDataSource.getRepository(Team_User);

        const Team_UserFind = await repo.findOne({ where: { user_id } });

        if (!Team_UserFind) {
            throw new Error("User Team not found");
        }

        Team_UserFind.team_id = team_id;

        await repo.save(Team_UserFind);

        return Team_UserFind
    }
}