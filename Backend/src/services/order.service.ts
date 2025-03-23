// import { ordersRepository } from "../repositories/orders.repository";
// import { userRepository } from "../repositories/users.repository";

// export class OrderService {
//     async addOrder(date: string, status: string, user_id: number) {
//         try {
//             const user = await userRepository.findOne({ where: { id: user_id } });
//             if (!user) {
//                 throw new Error("User not found");
//             }
//             const orderRepo = ordersRepository.create({
//                 order_date: date,
//                 status: status,
//                 user: user
//             });
//             const savedOrder = await ordersRepository.save(orderRepo);

//             return `Order saved successfully: ${JSON.stringify(savedOrder)}!`;
//         } catch (error:any){
//             return `Error while saving order: ${error.message}`;
//         }
//     }

//     async deleteOrder(id: number) {
//         try {
//             const order = await ordersRepository.findOne({ where: { id } });
//             if (!order) {
//                 throw new Error("Order not found");
//             }
//             await ordersRepository.delete(id);
//             return `Order deleted successfully!`;
//         } catch (error:any) {
//             return `Error while deleting order: ${error.message}`;
//         }
//     }
// }
