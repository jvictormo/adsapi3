import { Request, Response } from "express";
import { GetUserService } from "../../services/User/GetUserService";
import { getAuth, signInWithEmailAndPassword } from '../../config/firebase.cjs';

export class GetUserAuthController {
    async handle(req, res) {
        const { email, cpf, password, companyName } = req.query;

        const params = email ? { email } : { cpf };

        const queryParams = { ...params, companyName };

        try {
            const userService = new GetUserService();
            const user = await userService.execute(queryParams);

            const userCredential = await signInWithEmailAndPassword(getAuth(), user[0]["email"], password);

            return res.json(userCredential)
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}