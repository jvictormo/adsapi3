import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import {getAuth, createUserWithEmailAndPassword} from '../config/firebase.cjs';

export class CreateUserController {
    async handle(req, res) {
        const {leaderEmail, name, email, password} = req.body

        try {
            const service = new CreateUserService()

            const result = await service.execute({leaderEmail, name, email});

            const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);

            if (result instanceof Error){
                return res.status(400).json(result.message);
            }

            return res.json(result)
        } catch (error){
            return res.status(500).send({error: error.message});
        }
    }
}