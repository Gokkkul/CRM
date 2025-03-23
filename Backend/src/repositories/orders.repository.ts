import { AppDataSource } from "../config/data-source";
import { Orders } from "../entities/orders.entity";

export const ordersRepository = AppDataSource.getRepository(Orders)