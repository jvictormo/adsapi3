import { Request, Response } from "express";
import { GetUserService } from "../../services/User/GetUserService";
import { DeleteUserService } from "../../services/User/DeleteUserService";
import { GetTeam_UserService } from "../../services/Team_User/GetTeam_UserService";
import { DeleteTeam_UserService } from "../../services/Team_User/DeleteTeam_UserService";
import { getAuth, deleteUser, admin } from '../../config/firebase.cjs';

export class DeleteUserController {
    async handle(req, res) {
        const { id } = req.params;

        try {
            const userGetService = new GetUserService();
            const teamUserGetService = new GetTeam_UserService();
            const user = await userGetService.execute({ id });
            const teamUser = await teamUserGetService.execute({ user_id: id })

            if (user instanceof Error) {
                return res.status(404).send({ error: user.message });
            }

            const userFireBase = await admin.auth().getUserByEmail(user[0]["email"])

            console.log(userFireBase.uid)

            await admin.auth().deleteUser(userFireBase.uid)

            const teamUserDeleteService = new DeleteTeam_UserService();
            await teamUserDeleteService.execute( teamUser["id"] )

            const userDeleteService = new DeleteUserService();
            await userDeleteService.execute({ id })

            return res.status(200).send("User deleted successfully");
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}