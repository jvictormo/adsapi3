import { AppDataSource } from "../../database/DataSource";
import { User } from "../../entities/User";
//objeto para manipulação
type UserRequest = {
    id: number;
}

export class DeleteUserService {
    async execute({ id }: UserRequest): Promise<string | Error> {
        //coneexão com a database
        const repo = AppDataSource.getRepository(User);
        //verifica se o usuário existe
        const userFind = await repo.findOne({ where: { id } });
        if (!userFind) {
            throw new Error("User not found");
        }
        //deleta a entrada
        await repo.remove(userFind);

        return "User deleted successfully"
    }
}