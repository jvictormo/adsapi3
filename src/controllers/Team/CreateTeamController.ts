import { Request, Response} from 'express';
import { CreateTeamService } from '../../services/Team/CreateTeamService';
    
    export class CreateTeamController{
        async handle(req, res) {
            const {description, name, companyName} = req.body

            try {
                const service = new CreateTeamService()

                const result = await service.execute({description, name, companyName});

                if (result instanceof Error){
                    return res.status(400).json(result.message)
                }

                return res.json(result)
            } catch (error){
                return res.status(500).send({error: error.message})
            }
        }
    }