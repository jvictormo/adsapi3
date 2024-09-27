//esse arquivo define as rotas do site
//basicamente, para mandar uma informação do front para o back, é preciso criar uma rota
//exemplo da rota do adm: http://localhost:3000/adm
import { Router } from "express";
import { CreateAdmUserController } from "./controllers/Adm/CreateAdmUserController";
import { CreateUserController } from "./controllers/User/CreateUserServiceController";
import { CreateTeamController } from "./controllers/Team/CreateTeamController";
import { GetAdmUserAuthController } from "./controllers/Adm/GetAdmUserAuthController";
import { GetUserAuthController } from "./controllers/User/GetUserAuthController";
import { DeleteUserController } from "./controllers/User/DeleteUserController"
import { DeleteAdmUserController } from "./controllers/Adm/DeleteAdmUserController";
import { GetTeamController } from "./controllers/Team/GetTeamController";
import { DeleteTeamController } from "./controllers/Team/DeleteTeamController";
import { GetUserController } from "./controllers/User/GetUserController";

const routes = Router();

routes.post("/adm", new CreateAdmUserController().handle);
routes.get("/adm/auth", new GetAdmUserAuthController().handle);
routes.delete("/adm/:id", new DeleteAdmUserController().handle);

routes.post("/user", new CreateUserController().handle);
routes.get("/user", new GetUserController().handle);
routes.get("/user/auth", new GetUserAuthController().handle);
routes.delete("/user/:id", new DeleteUserController().handle);

routes.post("/team", new CreateTeamController().handle);
routes.get("/team/:id", new GetTeamController().handle);
routes.delete("/team/:id", new DeleteTeamController().handle);

export { routes }