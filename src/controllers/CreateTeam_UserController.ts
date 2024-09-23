import { Request, Response} from 'express';
import { CreateTeam_UserService } from '../services/CreateTeam_UserService';
    
    export class CreateTeam_UserController{
        async handle(req, res) {
            const {team_id, leader_id, user_id} = req.body

            try {
                const service = new CreateTeam_UserService()

                const result = await service.execute({team_id, leader_id, user_id});

                if (result instanceof Error){
                    return res.status(400).json(result.message)
                }

                return res.json(result)
            } catch (error){
                return res.status(500).send({error: error.message})
            }
        }
    }