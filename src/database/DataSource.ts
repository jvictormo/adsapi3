import { DataSource } from "typeorm";
import dotenv from 'dotenv';

//carregando as variáveis do arquivo '.env'
dotenv.config({ path: 'src/.env' });
//criando a conexão com a database
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrations: [process.env.TYPEORM_MIGRATIONS],
  entities: [process.env.TYPEORM_ENTITIES],
});