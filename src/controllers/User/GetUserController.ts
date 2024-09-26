import { Request, Response } from "express";
import { GetUserService } from "../../services/User/GetUserService";

export class GetUserController {
    async handle(req, res) {
        const { email, cpf, companyName } = req.query;

        const params = email ? { email } : { cpf };

        const queryParams = { ...params, companyName };

        try {

            const userService = new GetUserService();
            const user = await userService.execute(queryParams);

            return res.json(user)
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}