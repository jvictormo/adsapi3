import { Request, Response } from "express";
import { GetAdmUserService } from "../../services/Adm/GetAdmUserService";
import { getAuth, signInWithEmailAndPassword } from '../../config/firebase.cjs';

export class GetAdmUserAuthController {
    async handle(req, res) {
        const { email, cnpj, password } = req.query;

        const params = email ? { email } : { cnpj };
    
        try {
            const userService = new GetAdmUserService();
            const user = await userService.execute(params);

            const userCredential = await signInWithEmailAndPassword(getAuth(), user["email"], password);

            return res.json(userCredential)
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}