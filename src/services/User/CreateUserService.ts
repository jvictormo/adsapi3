import { AppDataSource } from "../../database/DataSource";
import { User } from "../../entities/User";
//objeto para manipulaçaõ
type UserRequest = {
    leaderEmail: string;
    name: string;
    email: string;
    cpf: string;
    companyName: string;
}

export class CreateUserService {
    async execute ({leaderEmail, name, email, cpf, companyName}: UserRequest): Promise<User | Error>{
        //conexão com a database
        const repo = AppDataSource.getRepository(User);

        //verifica se o email já existe
        const existingUserByEmail = await repo.findOne({where: {email}});
        if (existingUserByEmail){
            throw new Error("Email already exists");
        }
        //insere os dados na tabela
        const userInsert = repo.create({leaderEmail, name, email, cpf, companyName})
        //salva a tabela
        await repo.save(userInsert)

        return userInsert
    }
}