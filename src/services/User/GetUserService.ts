import { AppDataSource } from "../../database/DataSource";
import { User } from "../../entities/User";

export class GetUserService {
    async execute(params: { email?: string; cpf?: string; id?: number; companyName?: string }): Promise<User[] | Error> {
        //coenxão com a database
        const repo = AppDataSource.getRepository(User);
        const { email, cpf, id, companyName } = params; //relaciona com uma variável os parâmetros recebidos

        //verifica se o usuário existe de acordo com as variáveis
        if (companyName) {
            const users = await repo.find({ where: { companyName } });
            return users
        }
        let userFind = null
        if (email) {
            userFind = await repo.findOne({ where: { email, companyName } });
        } else if (cpf) {
            userFind = await repo.findOne({ where: { cpf, companyName } });
        } else {
            userFind = await repo.findOne({ where: { id } });
        }
        
        //retorna o usuário
        if (userFind) return [userFind];
        else throw new Error("User not found");
    }
}