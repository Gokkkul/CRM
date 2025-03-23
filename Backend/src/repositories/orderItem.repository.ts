import { AppDataSource } from "../config/data-source";
import { OrderItem } from "../entities/orderItem.entity";

const orderItemRepository = AppDataSource.getRepository(OrderItem)