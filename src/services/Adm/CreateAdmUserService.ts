import { AppDataSource } from "../../database/DataSource";
import { Adm } from "../../entities/AdmUser"

//objeto para poder manipular
type AdmUserRequest = {
    name: string;
    email: string;
    cnpj: string;
    companyName: string;
}

export class CreateAdmUserService {
    async execute ({ name, email, cnpj, companyName }: AdmUserRequest): Promise<Adm | Error> {
        //conexão com a database
        const repo = AppDataSource.getRepository(Adm);

        //verifica se já existe nome, email ou cnpj (são campos únicos)
        const existingUserByName = await repo.findOne({where: {companyName}})
        const existingUserByEmail = await repo.findOne({ where: { email } });
        const existingUserByCnpj = await repo.findOne({ where: { cnpj } });
        if (existingUserByEmail || existingUserByCnpj || existingUserByName){
            throw new Error("Email, CNPJ or companyName alredy exist");
        }

        //cria os registros na tabela
        const admUser = repo.create({ name, email, cnpj, companyName });
        
        //salva a tabela
        await repo.save(admUser)

        return admUser
    }
}