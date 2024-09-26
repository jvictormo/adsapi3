import { AppDataSource } from "../../database/DataSource";
import { Adm } from "../../entities/AdmUser";

type TeamRequest = {
    name: string;
    id: number;
}

export class UpdateTeamService {
    async execute({ name, id }: TeamRequest): Promise<Adm | Error> {
        const repo = AppDataSource.getRepository(Adm);

        const userFind = await repo.findOne({where: {id} })

        if (!userFind) {
            throw new Error("User Team not found");
        }

        userFind.name = name;

        await repo.save(userFind);

        return userFind
    }
}