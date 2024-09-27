import { AppDataSource } from "../../database/DataSource";
import { User } from "../../entities/User";
//manipulação do objeto
type UserRequest = {
    leaderEmail: string;
    name: string;
    companyName: string;
    id: number;
}

export class UpdateUserService {
    async execute ({leaderEmail, name, companyName, id}: UserRequest): Promise<User | Error>{
        //conexão com a database
        const repo = AppDataSource.getRepository(User);
        //verifica se o user existe na tabela
        const userFind = await repo.findOne({ where: { id } });
        if (!userFind) {
            throw new Error("User not found");
        }
        //altera os dados e salva
        userFind.leaderEmail = leaderEmail;
        userFind.name = name;
        userFind.companyName = companyName;
        await repo.save(userFind);

        return userFind
    }
}