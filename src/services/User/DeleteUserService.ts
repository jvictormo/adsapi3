import { AppDataSource } from "../../database/DataSource";
import { User } from "../../entities/User";

type UserRequest = {
    id: number;
}

export class DeleteUserService {
    async execute({ id }: UserRequest): Promise<string | Error> {
        const repo = AppDataSource.getRepository(User);
        
        const userFind = await repo.findOne({ where: { id } });

        if (!userFind) {
            throw new Error("User not found");
        }

        await repo.remove(userFind);

        return "User deleted successfully"
    }
}