import { Request, Response } from "express";
import { CreateAdmUserService } from "../services/CreateAdmUserService";

export class CreateAdmUserController {
    async handle (req, res) {
        const { email, name, cnpj, companyName } = req.body
        
        const service = new CreateAdmUserService();

        const result = await service.execute({ email, name, cnpj, companyName });

        if (result instanceof Error){
            return res.status(400).json(result.message);
        }
        
        return res.json(result)
    }
}