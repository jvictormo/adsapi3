import { AppDataSource } from "../../database/DataSource";
import { Team } from "../../entities/Team";

type TeamRequest = {
    description: string;
    name: string;
    id: number;
}

export class UpdateTeamService {
    async execute({description, name, id}: TeamRequest): Promise<Team | Error> {
        const repo = AppDataSource.getRepository(Team);

        const TeamFind = await repo.findOne({where: {id} })

        if (!TeamFind) {
            throw new Error("User Team not found");
        }

        TeamFind.description = description;
        TeamFind.name = name;

        await repo.save(TeamFind);

        return TeamFind
    }
}