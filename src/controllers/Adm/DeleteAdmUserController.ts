import { Request, Response } from "express";
import { GetAdmUserService } from "../../services/Adm/GetAdmUserService";
import { DeleteAdmUserService } from "../../services/Adm/DeleteAdmUserService";
import { getAuth, deleteUser, admin } from '../../config/firebase.cjs';

export class DeleteAdmUserController {
    async handle(req, res) {
        const { id } = req.params;

        try {
            const userGetService = new GetAdmUserService();
            const user = await userGetService.execute({ id });

            if (user instanceof Error) {
                return res.status(404).send({ error: user.message });
            }

            const userFireBase = await admin.auth().getUserByEmail(user["email"])

            console.log(userFireBase.uid)

            await admin.auth().deleteUser(userFireBase.uid)

            const userDeleteService = new DeleteAdmUserService();
            await userDeleteService.execute({ id })

            return res.status(200).send("User deleted successfully");
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}