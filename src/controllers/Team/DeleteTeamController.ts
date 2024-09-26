import { Request, Response} from 'express';
import { DeleteTeamService } from '../../services/Team/DeleteTeamService';
    
    export class DeleteTeamController{
        async handle(req, res) {
            const {id} = req.params

            try {
                const userDeleteService = new DeleteTeamService();
                await userDeleteService.execute({ id })

                return res.status(200).send("Team deleted successfully");
            } catch (error){
                return res.status(500).send({error: error.message})
            }
        }
    }