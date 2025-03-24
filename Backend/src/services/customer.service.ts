import { Customer } from "../entities/customer.entity";
import { customerRepository } from "../repositories/customer.repository";


const customerRepo = new customerRepository()

export class customerService{
    async addCustomer(customer: Partial<Customer>){
        try {
            const result = await customerRepo.addCustomer(customer);
            return result;
        } catch (error) {
            return `Error: ${error}`
        }
        
    }

    async updateCustomer(id: number, customer: Partial<Customer>){
        try {
            const result = await customerRepo.updateCustomer(id, customer)
            return result;
        } catch (error) {
            return `Error: ${error}`
        }
    }
}