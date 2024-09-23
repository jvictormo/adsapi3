import { Router } from "express";
import { CreateAdmUserController } from "./controllers/CreateAdmUserController";
import { CreateUserController } from "./controllers/CreateUserServiceController";
import { CreateTeamController } from "./controllers/CreateTeamController";
import { CreateTeam_UserController } from "./controllers/CreateTeam_UserController";

const routes = Router();

routes.post("/adm", new CreateAdmUserController().handle);

routes.post("/user", new CreateUserController().handle);

routes.post("/team", new CreateTeamController().handle);

routes.post('/team_user', new CreateTeam_UserController().handle)

export { routes }