import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import { OrderItem } from "../entities/orderItem.entity";
import { Orders } from "../entities/orders.entity";
import { Product } from "../entities/product.entity";
import { User } from "../entities/users.entity";
import { Profile } from "../entities/profile.entity";


dotenv.config()

export const AppDataSource = new DataSource({
    type: "mssql",
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Profile,User,OrderItem, Orders, Product],
    synchronize: true,
    logging: false,
    options: {
        trustServerCertificate: true
    }
})