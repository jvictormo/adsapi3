import { AppDataSource } from "../../database/DataSource";
import { Adm } from "../../entities/AdmUser"

type UserRequest = {
    id: number;
}

export class DeleteAdmUserService {
    async execute({ id }: UserRequest): Promise<string | Error> {
        const repo = AppDataSource.getRepository(Adm);

        const userFind = await repo.findOne({ where: { id } });

        if (!userFind) {
            throw new Error("User not found");
        }

        await repo.remove(userFind);

        return "User deleted successfully"
    }
}