import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';


dotenv.config()

export const AppDataSource = new DataSource({
    // type: "mssql",
    type: "mysql",
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["./src/entities/*.ts"],
    synchronize: true,
    logging: false,
    // options: {
    //     trustServerCertificate: true
    // }
})