import { AppDataSource } from "../../database/DataSource";
import { Adm } from "../../entities/AdmUser";

//cria objeto para manipulação
type TeamRequest = {
    name: string;
    id: number;
}

export class UpdateTeamService {
    async execute({ name, id }: TeamRequest): Promise<Adm | Error> {
        //conexão com a database
        const repo = AppDataSource.getRepository(Adm);

        //tenta encontrar o usuário
        const userFind = await repo.findOne({where: {id} })

        if (!userFind) {
            throw new Error("User Team not found");
        }

        userFind.name = name;

        await repo.save(userFind);

        return userFind
    }
}