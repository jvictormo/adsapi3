import "reflect-metadata"
import express from "express"
import { AppDataSource } from "./database/DataSource"
import { routes } from "./routes"

require('dotenv').config();

const app = express();

app.use(express.json());

app.use(routes);

AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => console.log("Server is running"));
    })
    .catch((error) => {
        console.error("Erro ao conectar ao banco de dados:", error);
      });