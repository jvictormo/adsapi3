import { Router } from "express";
import { CreateAdmUserController } from "./controllers/CreateAdmUserController";

const routes = Router();

routes.post("/adm", new CreateAdmUserController().handle);

export { routes }