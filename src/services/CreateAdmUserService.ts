import { AppDataSource } from "../database/DataSource";
import { Adm } from "../entities/AdmUser"

type AdmUserRequest = {
    email: string;
    name: string;
    cnpj: string;
    companyName: string;
}

export class CreateAdmUserService {
    async execute ({ email, name, cnpj, companyName }: AdmUserRequest): Promise<Adm | Error> {
        const repo = AppDataSource.getRepository(Adm);

        const existingUserByEmail = await repo.findOne({ where: { email } });
        const existingUserByCnpj = await repo.findOne({ where: { cnpj } });

        if (existingUserByEmail || existingUserByCnpj){
            throw new Error("Email or CNPJ alredy exist");
        }

        const admUser = repo.create({ email, name, cnpj, companyName });

        await repo.save(admUser)

        return admUser
    }
}