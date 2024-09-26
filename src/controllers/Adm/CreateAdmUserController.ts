import { Request, Response } from "express";
import { CreateAdmUserService } from "../../services/Adm/CreateAdmUserService";
import { getAuth, createUserWithEmailAndPassword } from '../../config/firebase.cjs';

export class CreateAdmUserController {
    async handle(req, res) {
        const { name, email, cnpj, companyName, password } = req.body

        try {

            const service = new CreateAdmUserService();

            const result = await service.execute({ name, email, cnpj, companyName });

            const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);

            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }

            return res.json(result)
        } catch(error) {
            return res.status(500).send({ error: error.message });
        }
    }
}