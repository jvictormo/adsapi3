import { AppDataSource } from "../../database/DataSource";
import { Team } from "../../entities/Team";

//objeto para manipulação
type TeamRequest = {
    description: string;
    name: string;
    id: number;
}

export class UpdateTeamService {
    async execute({description, name, id}: TeamRequest): Promise<Team | Error> {
        //conexão com a database
        const repo = AppDataSource.getRepository(Team);

        //acha o usuário
        const TeamFind = await repo.findOne({where: {id} })

        if (!TeamFind) {
            throw new Error("User Team not found");
        }

        //atualiza os dados e salva o usuário
        TeamFind.description = description;
        TeamFind.name = name;
        await repo.save(TeamFind);

        return TeamFind
    }
}