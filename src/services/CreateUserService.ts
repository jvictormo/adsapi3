import { AppDataSource } from "../database/DataSource";
import { User } from "../entities/User";

type UserRequest = {
    leaderEmail: string;
    name: string;
    email: string;
}

export class CreateUserService {
    async execute ({leaderEmail, name, email}: UserRequest): Promise<User | Error>{
        const repo = AppDataSource.getRepository(User);

        const existingUserByEmail = await repo.findOne({where: {email}});

        if (existingUserByEmail){
            throw new Error("Email already exists");
        }

        const userInsert = repo.create({leaderEmail, name, email})

        await repo.save(userInsert)

        return userInsert
    }
}