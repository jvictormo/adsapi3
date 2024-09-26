import { AppDataSource } from "../../database/DataSource";
import { User } from "../../entities/User";

type UserRequest = {
    leaderEmail: string;
    name: string;
    companyName: string;
    id: number;
}

export class UpdateUserService {
    async execute ({leaderEmail, name, companyName, id}: UserRequest): Promise<User | Error>{
        const repo = AppDataSource.getRepository(User);

        const userFind = await repo.findOne({ where: { id } });

        if (!userFind) {
            throw new Error("User not found");
        }

        userFind.leaderEmail = leaderEmail;
        userFind.name = name;
        userFind.companyName = companyName;

        await repo.save(userFind);

        return userFind
    }
}