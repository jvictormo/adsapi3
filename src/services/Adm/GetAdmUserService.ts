import { AppDataSource } from "../../database/DataSource";
import { Adm } from "../../entities/AdmUser"

export class GetAdmUserService {
    //permite deletar por email, cnpj e id
    async execute(params: { email?: string; cnpj?: string; id?: number }): Promise<Adm | Error> {
        //conexão com a database
        const repo = AppDataSource.getRepository(Adm);
        const { email, cnpj, id } = params;

        let userFind = null

        //deleta com base no dado fornecido
        if (email) {
            userFind = await repo.findOne({ where: { email } });
        } else if (cnpj) {
            userFind = await repo.findOne({ where: { cnpj } });
        } else {
            userFind = await repo.findOne({ where: { id } })
        }

        if (userFind) return userFind;
        else throw new Error("User not found");
    }
}