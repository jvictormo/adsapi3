import { Request, Response} from 'express';
import { GetTeamService } from '../../services/Team/GetTeamService';
    
    export class GetTeamController{
        async handle(req, res) {
            const {id} = req.params

            try {
                const userGetService = new GetTeamService();
                await userGetService.execute({ id })

                return res.json(userGetService)
            } catch (error){
                return res.status(500).send({error: error.message})
            }
        }
    }