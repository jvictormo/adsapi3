import { AppDataSource } from "../../database/DataSource";
import { Adm } from "../../entities/AdmUser"

type AdmUserRequest = {
    name: string;
    email: string;
    cnpj: string;
    companyName: string;
}

export class CreateAdmUserService {
    async execute ({ name, email, cnpj, companyName }: AdmUserRequest): Promise<Adm | Error> {
        const repo = AppDataSource.getRepository(Adm);

        const existingUserByName = await repo.findOne({where: {companyName}})
        const existingUserByEmail = await repo.findOne({ where: { email } });
        const existingUserByCnpj = await repo.findOne({ where: { cnpj } });

        if (existingUserByEmail || existingUserByCnpj || existingUserByName){
            throw new Error("Email, CNPJ or companyName alredy exist");
        }

        const admUser = repo.create({ name, email, cnpj, companyName });

        await repo.save(admUser)

        return admUser
    }
}