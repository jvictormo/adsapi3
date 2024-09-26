import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";
import { CreateTeam_UserService } from '../../services/Team_User/CreateTeam_UserService';
import {getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail} from '../../config/firebase.cjs';
import { generateRandomPassword } from "../../config/generateRandomPassword"

export class CreateUserController {
    async handle(req, res) {
        const {leaderEmail, name, email, cpf, companyName, team_id} = req.body

        try {
            const service = new CreateUserService()
            const strangerKey = new CreateTeam_UserService()

            const result = await service.execute({leaderEmail, name, email, cpf, companyName});
            const password = generateRandomPassword();

            const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);

            if (result instanceof Error){
                return res.status(400).json(result.message);
            }

            const user_id = result.id;

            const strangerKeyResult = await strangerKey.execute({user_id, team_id})

            if (result instanceof Error){
                return res.status(400).json(result.message)
            }

            await sendPasswordResetEmail(getAuth(), email);

            return res.json(result)
        } catch (error){
            return res.status(500).send({error: error.message});
        }
    }
}
