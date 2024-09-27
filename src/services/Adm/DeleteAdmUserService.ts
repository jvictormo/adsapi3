import { AppDataSource } from "../../database/DataSource";
import { Adm } from "../../entities/AdmUser"

type UserRequest = {
    id: number;
}

export class DeleteAdmUserService {
    async execute({ id }: UserRequest): Promise<string | Error> {
        //conexão com a database
        const repo = AppDataSource.getRepository(Adm);

        //verifica se há o usuário
        const userFind = await repo.findOne({ where: { id } });

        if (!userFind) {
            throw new Error("User not found");
        }

        //remove o usuário
        await repo.remove(userFind);

        return "User deleted successfully"
    }
}